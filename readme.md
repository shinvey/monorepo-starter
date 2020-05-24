# 常见问题

## 包与包之间如何进行单向依赖？
直接使用 [lerna add](https://github.com/lerna/lerna/tree/master/commands/add#readme) 命令就可以

## 如何提交内容有描述破坏性更新（breaking changes）？发布方式有何不同？
对于commit message该如何描述，可以查看conventional commits文档。
发布方式一样，使用lerna publish发布。
参考文档
- [Commit message with description and breaking change in body](https://www.conventionalcommits.org/en/v1.0.0-beta.4/#commit-message-with-description-and-breaking-change-in-body)
