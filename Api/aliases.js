const moduleAlias = require("module-alias");

moduleAlias.addAliases({
    '@models': __dirname + '/Models',
    '@controllers': __dirname + '/Controllers',
    '@entidades': __dirname + '/Entities',
    '@configs': __dirname + '/Configs',
    '@utilidades': __dirname + '/Utils',
    '@rotas': __dirname + '/Routes',
    '@servicos': __dirname + '/Services',
    '@views': __dirname + '/Views'
});
