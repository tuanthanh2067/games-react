export const resizeImage = (path) => {
  const image = path.match(/media\/screenshots/)
    ? path.replace("media/screenshots", `media/resize/1280/-/screenshots`)
    : path.replace("/media/games/", "/media/resize/640/-/games/");
  return image;
};
