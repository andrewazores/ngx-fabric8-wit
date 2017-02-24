export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/ngx-fabric8-wit.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ngx.fabric8.wit',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/http': 'ng.http',
    '@angular/router': 'ng.router',
    'rxjs/Observable': 'Rx',
    'rxjs/Subject': 'Rx',
    'rxjs/ReplaySubject': 'Rx',
    'rxjs/add/operator/filter': 'Rx.Observable.prototype',
    'rxjs/add/operator/map': 'Rx.Observable.prototype',
    'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
    'rxjs/add/operator/toPromise': 'Rx.Observable.prototype',
    'rxjs/add/observable/fromEvent': 'Rx.Observable',
    'rxjs/add/observable/of': 'Rx.Observable'
  }
}
