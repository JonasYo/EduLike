const getFileType = (url: string): string | null => {
  const imageExtensions = ['jpg', 'jpeg', 'png', 'webp'];
  const videoExtensions = ['mp4', 'webm'];

  const extension = url.split('.').pop()?.toLowerCase();

  if (extension && imageExtensions.includes(extension)) {
    return 'image';
  } else if (extension && videoExtensions.includes(extension)) {
    return 'video';
  } else {
    return null;
  }
};

export { getFileType };
