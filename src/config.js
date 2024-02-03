const fullPath = [window.location.origin, window.location.pathname].join('');
const rootPath = fullPath
  .replace('dist/index.html', '')
  .replace('dist/index.php', '')
  .replace('index.html', '')
  .replace('index.php', '');

export default {
  global: {
    appName: 'Стикеры',
    appNameEng: 'Stickers',
    appCodeName: 'bitrix24-stickerpack-bot',
    appDirName: window.DIRNAME_APP,
    archiveName: window.ARCHIVE_NAME,
    archiveHashName: window.ARCHIVE_HASH_NAME,
    mode: window.MODE,
  },
  path: rootPath,
  handler: fullPath,
};
