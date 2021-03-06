module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    [
      '@babel/preset-react', {
        /* Allows the non-import of react in every .jsx file */
        runtime: 'automatic'
      }
    ]
  ]
}