module.exports = (api) => {
    const presets = [
        "@babel/preset-env",
       ["@babel/preset-react", {"runtime": "automatic"}]
    ];
    const plugins = [
        "@babel/plugin-transform-modules-commonjs",
        "inline-react-svg"
    ]; 
  
    api.cache(false); 
   
    return {
        presets,
        plugins
    };
};