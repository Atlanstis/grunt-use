const loadGruntTasks = require('load-grunt-tasks')
const sass = require('sass')

module.exports = (grunt) => {
  grunt.initConfig({
    sass: {
      options: {
        implementation: sass
      },
      main: {
        files: {
          // 目标路径: 源路径
          'dist/css/main.css': 'src/scss/main.scss'
        }
      }
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['@babel/preset-env']
      },
      main: {
        files: {
          // 目标路径: 源路径
          'dist/js/app.js': 'src/js/app.js'
        }
      }
    },
    watch: {
      js: {
        // 需监听的文件
        files: ['src/js/*.js'],
        // 文件发生变化后，需执行的任务
        tasks: ['babel']
      },
      css: {
        // 需监听的文件
        files: ['src/scss/*.scss'],
        // 文件发生变化后，需执行的任务
        tasks: ['sass']
      }
    }
  })

  loadGruntTasks(grunt)

  grunt.registerTask('default', ['sass', 'babel', 'watch'])
}
