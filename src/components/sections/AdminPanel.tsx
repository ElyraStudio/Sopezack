import React, { useState, useEffect, useRef } from 'react';
import { Link } from '@tanstack/react-router';
import { supabase } from '../../lib/supabaseClient';

interface DbFoto {
  id: number;
  url: string;
  categoria: string;
  created_at?: string;
}

export function AdminPanel() {
  const [session, setSession] = useState<any>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [fotos, setFotos] = useState<DbFoto[]>([]);

  const emailRef = useRef<HTMLInputElement>(null);
  const senhaRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);
  const [categoria, setCategoria] = useState('Retrato Autoral');
  const [statusMsg, setStatusMsg] = useState('');

  // Checa a sessão inicial e monitora mudanças de autenticação
  useEffect(() => {
    let mounted = true;

    async function checkInitialAuth() {
      try {
        const { data: { session: currentSession }, error } = await supabase.auth.getSession();
        if (error) throw error;
        if (mounted) setSession(currentSession);
      } catch (err) {
        console.error("Erro auth:", err);
      } finally {
        if (mounted) setCheckingAuth(false);
      }
    }

    checkInitialAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, newSession) => {
      if (mounted) setSession(newSession);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  // Busca as fotos salvas sempre que o usuário estiver logado
  useEffect(() => {
    if (session) {
      fetchFotos();
    }
  }, [session]);

  const fetchFotos = async () => {
    try {
      const { data, error } = await supabase
        .from('fotos')
        .select('*')
        .order('id', { ascending: false });

      if (error) throw error;
      if (data) setFotos(data);
    } catch (err) {
      console.error('Erro ao buscar lista de fotos:', err);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailValue = emailRef.current?.value || '';
    const senhaValue = senhaRef.current?.value || '';

    if (!emailValue || !senhaValue) {
      setStatusMsg('Preencha e-mail e senha.');
      return;
    }

    setStatusMsg('Autenticando...');
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailValue.trim(),
        password: senhaValue,
      });

      if (error) {
        setStatusMsg(`Erro: ${error.message}`);
        return;
      }

      if (data?.session) {
        setSession(data.session);
        setStatusMsg('');
      }
    } catch (err: any) {
      console.error('Erro inesperado no login:', err);
      setStatusMsg(`Erro inesperado: ${err?.message ?? 'tente novamente.'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (err) {
      console.error('Erro ao sair:', err);
    } finally {
      setSession(null);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setLoading(true);
      setStatusMsg('Enviando imagem...');

      if (!e.target.files || e.target.files.length === 0) {
        throw new Error('Selecione uma imagem.');
      }

      const file = e.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('galeria')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('galeria')
        .getPublicUrl(fileName);

      const { error: dbError } = await supabase
        .from('fotos')
        .insert([{ url: publicUrl, categoria }]);

      if (dbError) throw dbError;

      setStatusMsg('Foto adicionada com sucesso! 🎉');
      fetchFotos(); // Atualiza a lista na hora
    } catch (error: any) {
      console.error('Erro no upload:', error);
      setStatusMsg(`Erro: ${error?.message ?? 'falha no upload.'}`);
    } finally {
      setLoading(false);
      e.target.value = '';
    }
  };

  const handleDeletePhoto = async (foto: DbFoto) => {
    if (!window.confirm("Tem certeza que deseja apagar essa foto permanentemente da galeria?")) return;

    try {
      setLoading(true);
      setStatusMsg('Removendo foto...');

      // 1. Descobrir o nome do arquivo a partir da URL pública para limpar o Storage
      const urlParts = foto.url.split('/');
      const fileName = urlParts[urlParts.length - 1];

      if (fileName) {
        await supabase.storage
          .from('galeria')
          .remove([fileName]);
      }

      // 2. Remover do Banco de Dados
      const { error } = await supabase
        .from('fotos')
        .delete()
        .eq('id', foto.id);

      if (error) throw error;

      setStatusMsg('Foto removida com sucesso.');
      fetchFotos(); // Recarrega a grade atualizada
    } catch (err: any) {
      console.error('Erro ao apagar foto:', err);
      setStatusMsg(`Erro ao deletar: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (checkingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] text-white">
        <p className="text-zinc-400 text-sm animate-pulse">Carregando painel...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] px-4 text-white">
        <form onSubmit={handleLogin} className="w-full max-w-md space-y-6 rounded-2xl bg-zinc-900/50 p-8 border border-zinc-800/80 backdrop-blur-md">
          <div className="flex justify-between items-center mb-2">
            <Link to="/" className="text-zinc-500 hover:text-zinc-300 text-xs transition-colors">
              ← Voltar ao site
            </Link>
          </div>
          <h2 className="text-2xl font-bold text-center tracking-tight">Painel da Vanessa</h2>
          <p className="text-zinc-400 text-xs text-center">Faça login para gerenciar suas fotos</p>

          <div className="space-y-2">
            <label className="text-xs font-medium uppercase text-zinc-400 tracking-wider">E-mail</label>
            <input
              type="email"
              ref={emailRef}
              className="w-full rounded-lg bg-zinc-950 border border-zinc-800 p-3 text-sm text-white focus:outline-none focus:border-zinc-600"
              placeholder="seu-email@exemplo.com"
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium uppercase text-zinc-400 tracking-wider">Senha</label>
            <input
              type="password"
              ref={senhaRef}
              className="w-full rounded-lg bg-zinc-950 border border-zinc-800 p-3 text-sm text-white focus:outline-none focus:border-zinc-600"
              placeholder="••••••••"
              required
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-white p-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 transition-colors disabled:opacity-50"
          >
            {loading ? 'Entrando...' : 'Entrar no Painel'}
          </button>

          {statusMsg && <p className="text-center text-xs text-zinc-400 mt-2">{statusMsg}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] p-6 text-white md:p-12">
      <div className="mx-auto max-w-6xl space-y-8">
        
        {/* Topo do Painel */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-zinc-400 hover:text-white border border-zinc-800 bg-zinc-950 rounded-lg px-3 py-2 text-xs font-medium transition-colors">
              ← Voltar ao Site
            </Link>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight">Gerenciar Galeria</h1>
          </div>
          <button onClick={handleLogout} className="rounded-lg bg-zinc-900 border border-zinc-800 px-4 py-2 text-xs font-medium hover:bg-zinc-800 transition-colors">
            Sair
          </button>
        </div>

        {/* Layout de duas colunas */}
        <div className="grid gap-8 lg:grid-cols-3 items-start">
          
          {/* Formulário lateral de Upload */}
          <div className="lg:col-span-1 space-y-6 rounded-2xl bg-zinc-900/50 p-6 border border-zinc-800/80">
            <h3 className="text-md font-semibold">Nova Foto</h3>

            <div className="space-y-2">
              <label className="text-xs text-zinc-400 uppercase tracking-wider">Categoria</label>
              <select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className="w-full rounded-lg bg-zinc-950 border border-zinc-800 p-3 text-sm text-white focus:outline-none"
              >
                <option value="Retrato Autoral">Retrato Autoral</option>
                <option value="Posicionamento">Posicionamento</option>
                <option value="Gestante">Gestante</option>
                <option value="Essência Feminina">Essência Feminina</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-zinc-400 uppercase tracking-wider">Arquivo de Imagem</label>
              <label className="flex flex-col items-center justify-center border border-dashed border-zinc-800 rounded-xl p-6 hover:border-zinc-600 cursor-pointer bg-zinc-950 transition-colors">
                <span className="text-xs font-medium text-zinc-300">Selecionar arquivo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  disabled={loading}
                  className="hidden"
                />
              </label>
            </div>

            {statusMsg && <p className="text-xs text-center p-2 rounded bg-zinc-950 border border-zinc-800 text-zinc-300">{statusMsg}</p>}
          </div>

          {/* Grade de Fotos Existentes */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-md font-semibold">Fotos Ativas ({fotos.length})</h3>
            
            {fotos.length === 0 ? (
              <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/20 p-12 text-center">
                <p className="text-sm text-zinc-500">Nenhuma imagem cadastrada no banco. Exibindo fallbacks no portfólio.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {fotos.map((foto) => (
                  <div key={foto.id} className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
                    <img 
                      src={foto.url} 
                      alt={foto.categoria} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" 
                    />
                    
                    {/* Overlay de Ações no Hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                      <span className="bg-zinc-900/90 text-[9px] uppercase tracking-wider px-2 py-1 rounded border border-zinc-700/50 text-zinc-200 self-start">
                        {foto.categoria}
                      </span>
                      
                      <button
                        onClick={() => handleDeletePhoto(foto)}
                        disabled={loading}
                        className="w-full py-1.5 rounded bg-red-950/80 border border-red-800 hover:bg-red-900 text-red-200 text-xs font-medium transition-colors"
                      >
                        Excluir Foto
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}