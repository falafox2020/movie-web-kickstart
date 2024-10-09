import React from 'react';
import EmbedPlayer from '@/components/watch/embed-player';

export const revalidate = 3600;

export default function Page({ params }: { params: { slug: string } }) {
  const id = params.slug.split('-').pop();
  return <EmbedPlayer url={`https://vidsrc.me/v2/embed/movie/${id}`} />;
}

//https://vidsrc.xyz/embed/movie/tt5433140
//https://vidsrc.cc/v2/embed/movie/${id}
