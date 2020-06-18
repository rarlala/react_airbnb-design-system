const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                tedt: /\.scss$/,
                loaders: ["sass-loader"],
                include: path.resolve(__dirname, "../")
            }
        ]
    }

}