// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

angular.module('mm.addons.mod_page', ['mm.core'])

.constant('mmaModPageComponent', 'mmaModPage')

.config(function($stateProvider) {

    $stateProvider

    .state('site.mod_page', {
      url: '/mod_page',
      params: {
        module: null,
        courseid: null
      },
      views: {
        'site': {
          controller: 'mmaModPageIndexCtrl',
          templateUrl: 'addons/mod/page/templates/index.html'
        }
      }
    });

})

.config(function($mmCourseDelegateProvider, $mmCoursePrefetchDelegateProvider, $mmContentLinksDelegateProvider) {
    $mmCourseDelegateProvider.registerContentHandler('mmaModPage', 'page', '$mmaModPageHandlers.courseContent');
    $mmCoursePrefetchDelegateProvider.registerPrefetchHandler('mmaModPage', 'page', '$mmaModPagePrefetchHandler');
    $mmContentLinksDelegateProvider.registerLinkHandler('mmaModPage', '$mmaModPageHandlers.linksHandler');
});
