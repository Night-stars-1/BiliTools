import { baseHttp } from './api';

/**
 * 获取最新版本
 */
export async function getLatestVersion(): Promise<string> {
  const options = {
    timeout: 6000,
  };
  try {
    const data = await Promise.any([
      baseHttp.get('https://api.github.com/repos/catlair/BiliTools/releases/latest', options),
      baseHttp.get('https://gitee.com/api/v5/repos/catlair/BiliTools/releases/latest', options),
    ]);
    return data.tag_name;
  } catch (error) {
    return;
  }
}
