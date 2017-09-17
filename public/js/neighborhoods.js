'use strict';(function(){'use strict';angular.module('botbus').controller('neighCtrl',neighCtrl).controller('neighFormCtrl',neighFormCtrl);function neighCtrl($http){var vm=this;$http.get('api/neighborhoods').then(function(r){vm.data=r.data},handleError);vm.remove=function(item){var index=vm.data.indexOf(item);$http.delete('api/neighborhoods/'+vm.data[index]._id).then(function(r){if(r.status===200){vm.data.splice(index,1)}},handleError)}}function neighFormCtrl($http){var vm=this;vm.saving=false;vm.data={};var id=window.location.pathname.split('/')[3];setTimeout(function(){if(vm.edit){$http.get('api/neighborhoods/'+id).then(function(r){vm.data=r.data},handleError)}},100);vm.save=function(){vm.saving=true;$http({method:vm.edit?'PUT':'POST',url:vm.edit?'api/neighborhoods/'+id:'api/neighborhoods',data:vm.data}).then(function(r){window.location='painel/bairros'},function(e){vm.saving=false;handleError(e)})}}function handleError(e){console.log(e)}neighCtrl.$inject=['$http'];neighFormCtrl.$inject=['$http']})();
//# sourceMappingURL=neighborhoods.js.map