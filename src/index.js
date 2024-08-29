const { gitPull, npmPull } = require('pull-sparse');
const superEjs = require('super-ejs');
const changeCase = require('@juln/change-case');

const gitPullEjsTpl = async (
  repository,
  opts = {},
  params = {},
  afterPull,
) => {
  opts = Object.assign({
    targetDir: '',
    outputDir: '.',
    branch: 'master',
  }, opts);

  await gitPull(repository, {
    targetDir: opts.targetDir,
    outputDir: opts.outputDir,
    branch: opts.branch,
    renameTargetDir: '',
    withDotGit: false,
  });
  afterPull?.();
  await superEjs.gerenateDir(
    opts.outputDir,
    opts.outputDir,
    { changeCase, ...params },
  );
};

const npmPullEjsTpl = async (
  pkgName,
  opts = {},
  params = {},
  afterPull,
) => {
  opts = Object.assign({
    registryUrl: 'https://registry.npmjs.org/',
    targetDir: '',
    outputDir: '.',
    tag: 'latest',
  }, opts);

  await npmPull(pkgName, {
    registryUrl: opts.registryUrl,
    targetDir: opts.targetDir,
    outputDir: opts.outputDir,
    tag: opts.tag,
    renameTargetDir: '',
  });
  afterPull?.();
  await superEjs.gerenateDir(
    opts.outputDir,
    opts.outputDir,
    { changeCase, ...params },
  );
};

exports.gitPullEjsTpl = gitPullEjsTpl;
exports.npmPullEjsTpl = npmPullEjsTpl;

// gitPullEjsTpl('git@gitlab.hupu.com:foundation-frontend/hupu-fed-ejs-tpls.git', {
//   outputDir: './temp',
//   targetDir: 'src/component/common',
// }, {
//   name: 'user-avatar',
// });

// npmPullEjsTpl('cra-template', {
//   outputDir: './temp',
//   targetDir: 'template',
// });
