const prettier = require('prettier');
module.exports = {
    extensions: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    apply: async function(file_path, content) {
            const cleanContent = content.replace(/^\/\/ @clay\s*\n?/, "");

        const options = await  prettier.resolveConfig(file_path);
        return prettier.format(cleanContent, {filepath: file_path, ...options});
    }
}