export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['build', 'ci', 'chore', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'addLog'],
    ],
  },
};

// build：构建流程或依赖变更（如 Webpack 配置更新）；
// ci：持续集成配置变更（如 GitHub Actions 脚本）；
// chore：杂项维护（如工具链调整）；
// docs：文档更新；
// feat：新增功能；
// fix：修复缺陷；
// perf：性能优化；
// refactor：代码重构；
// revert：回滚提交；
