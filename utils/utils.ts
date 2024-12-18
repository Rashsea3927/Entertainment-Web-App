import { createClient } from '@/app/utils/supabase/server';
import { GetEntertainments } from '@/types';

export const getTrendEntertainments = async () => {
  const supabase = await createClient();
  const { data: entertainments, error } = await supabase
    .from('entertainments')
    .select()
    .eq('isTrending', true);

  if (error) {
    return { error };
  }

  return { entertainments };
};

export const getAllEntertainments: () => GetEntertainments = async () => {
  const supabase = await createClient();
  const { data: entertainments, error } = await supabase
    .from('entertainments')
    .select('*')
    .eq('isTrending', false);

  if (error) {
    return { error };
  }

  return { entertainments };
};

export const getMoviesEntertainments: () => GetEntertainments = async () => {
  const supabase = await createClient();
  const { data: entertainments, error } = await supabase
    .from('entertainments')
    .select('*')
    .eq('type', 'movie');

  if (error) {
    return { error };
  }

  return { entertainments };
};

export const getTvSeriesEntertainments: () => GetEntertainments = async () => {
  const supabase = await createClient();
  const { data: entertainments, error } = await supabase
    .from('entertainments')
    .select('*')
    .eq('type', 'TV Series');

  if (error) {
    return { error };
  }

  return { entertainments };
};
