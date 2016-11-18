function songDecoder(song){
  return song.split('WUB').filter(Boolean).join(' ');
}
