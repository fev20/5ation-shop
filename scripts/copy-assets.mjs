import { cp, mkdir, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const output = resolve('dist');
async function copyDirectory(name) {
  const from = resolve(name);
  const to = resolve(output, name);
  await mkdir(to, { recursive: true });
  for (const file of await readdir(from)) await cp(resolve(from, file), resolve(to, file), { recursive: true, force: true });
}
await copyDirectory('images');
await copyDirectory('certificates');

// 기존 개인 도메인과 배포 정보를 빌드 결과에도 그대로 보존합니다.
await cp(resolve('CNAME'), resolve(output, 'CNAME'), { force: true });
await cp(resolve('DEPLOYMENT-NOTE.txt'), resolve(output, 'DEPLOYMENT-NOTE.txt'), { force: true });
