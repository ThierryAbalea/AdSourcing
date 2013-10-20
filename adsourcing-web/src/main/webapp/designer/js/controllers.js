'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

.controller('NavbarController', ['$scope', '$location', 
    function NavbarController($scope, $location) {
        $scope.isActive = function (viewLocation) { 
            return viewLocation === $location.path();
        };
    }]
)
.controller('AdsController', ['$scope',function($scope) {

}])
.controller('CampaignsController', ['$scope', 'Campaign',function($scope, Campaign) {
    //$scope.campaigns = Campaign.query();

        $scope.campaigns = [{
            'name': 'big campaign',
            'advertiserName': 'Sarenza',
            'description': 'Be creative !',
            'tags': ['shoes', 'girls', 'hello']
        },
        {
            'name': 'small campaign',
            'advertiserName': 'CDiscount',
            'description': 'Be creative !',
            'tags': ['tv', 'boys', 'world']
        }
        ];

        $scope.campaignsFullText=function(campaign) {
            var filter;
            filter = !$scope.searchName || 0 === $scope.searchName.length; // empty search field
            filter = filter || campaign.title.indexOf($scope.searchName) != -1;
            filter = filter || campaign.advertiserName.indexOf($scope.searchName) != -1;
            return filter;
        }
    }])
.controller('ProfileController', [function() {
        .controller('CampaignDetailsController', ['$scope', function($scope) {
            $scope.campaign = {
                'title': 'Nouvelle collection hiver 2013',
                'advertiser': 'Sarenza',

                'description': 'La campagne hiver 2013 est Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
            }

            $scope.bcgColors = ['#ee7722', '#ff5500', '#eeeeee', '#eecccc', '#997766', '#dd7744'];

            $scope.nbAffichage = 36;

            var visuels = [
                'http://azure.sarenza.net/static/_img/productsV4/0000061390/0000061390_107314_11.jpg?201209171757',
                'http://azure.sarenza.net/static/_img/productsV4/0000061731/0000061731_107928_11.jpg?201208201044',
                'http://azure.sarenza.net/static/_img/productsV4/0000060299/0000060299_105353_11.jpg?201208161057',
                'http://azure.sarenza.net/static/_img/productsV4/0000061149/0000061149_106919_11.jpg?201208291540',
                'http://azure.sarenza.net/static/_img/productsV4/0000061870/0000061870_108186_11.jpg?201208271950',
                'http://azure.sarenza.net/static/_img/productsV4/0000060653/0000060653_106003_11.jpg?201210191152',
                'http://azure.sarenza.net/static/_img/productsV4/0000060967/0000060967_106628_11.jpg?201211231943',
                'http://azure.sarenza.net/static/_img/productsV4/0000060327/0000060327_105398_11.jpg?201210032040',
                'http://azure.sarenza.net/static/_img/productsV4/0000061149/0000061149_106920_11.jpg?201208291541',
                'http://azure.sarenza.net/static/_img/productsV4/0000061731/0000061731_107929_11.jpg?201208201044',
                'http://azure.sarenza.net/static/_img/productsV4/0000061797/0000061797_108066_11.jpg?201208201058',
                'http://azure.sarenza.net/static/_img/productsV4/0000060347/0000060347_105433_11.jpg?201209262040',
                'http://azure.sarenza.net/static/_img/productsV4/0000061391/0000061391_107315_11.jpg?201208271710',
                'http://azure.sarenza.net/static/_img/productsV4/0000060915/0000060915_106546_11.jpg?201210011057',
                'http://azure.sarenza.net/static/_img/productsV4/0000060707/0000060707_106121_11.jpg?201211271941',
                'http://azure.sarenza.net/static/_img/productsV4/0000061816/0000061816_108100_11.jpg?201209241259',
                'http://azure.sarenza.net/static/_img/productsV4/0000060906/0000060906_106530_11.jpg?201209241903',
                'http://azure.sarenza.net/static/_img/productsV4/0000061467/0000061467_107434_11.jpg?201210041952',
                'http://azure.sarenza.net/static/_img/productsV4/0000061808/0000061808_108085_11.jpg?201209271157',
                'http://azure.sarenza.net/static/_img/productsV4/0000060711/0000060711_106132_11.jpg?201208291541',
                'http://azure.sarenza.net/static/_img/productsV4/0000061870/0000061870_108185_11.jpg?201208271048',
                'http://azure.sarenza.net/static/_img/productsV4/0000060162/0000060162_120805_11.jpg?201211231942',
                'http://azure.sarenza.net/static/_img/productsV4/0000061302/0000061302_107177_11.jpg?201207121040',
                'http://azure.sarenza.net/static/_img/productsV4/0000060903/0000060903_106524_11.jpg?201206271946',
                'http://azure.sarenza.net/static/_img/productsV4/0000060320/0000060320_105389_11.jpg?201207121046',
                'http://azure.sarenza.net/static/_img/productsV4/0000060494/0000060494_105709_11.jpg?201211161943',
                'http://azure.sarenza.net/static/_img/productsV4/0000060240/0000060240_105276_11.jpg?201208071942',
                'http://azure.sarenza.net/static/_img/productsV4/0000028108/0000028108_45491_11.jpg?201006041547',
                'http://azure.sarenza.net/static/_img/productsV4/0000066227/0000066227_116652_11.jpg?201302261840',
                'http://azure.sarenza.net/static/_img/productsV4/0000012413/0000012413_78245_11.jpg?201109072137',
                'http://azure.sarenza.net/static/_img/productsV4/0000012340/0000012340_16752_11.jpg?200807231707',
                'http://azure.sarenza.net/static/_img/productsV4/0000007103/0000007103_16757_11.jpg?200807231707',
                'http://azure.sarenza.net/static/_img/productsV4/0000062532/0000062532_109277_11.jpg?201210221153',
                'http://azure.sarenza.net/static/_img/productsV4/0000037328/0000037328_71318_11.jpg?201108251136',
                'http://azure.sarenza.net/static/_img/productsV4/0000060830/0000060830_106339_11.jpg?201207231043',
                'http://azure.sarenza.net/static/_img/productsV4/0000055831/0000055831_96971_11.jpg?201208291047',
                'http://azure.sarenza.net/static/_img/productsV4/0000060211/0000060211_105242_11.jpg?201210041956',
                'http://azure.sarenza.net/static/_img/productsV4/0000063600/0000063600_111276_11.jpg?201212070740',
                'http://azure.sarenza.net/static/_img/productsV4/0000034414/0000034414_56983_11.jpg?201011081736',
                'http://azure.sarenza.net/static/_img/productsV4/0000060264/0000060264_105316_11.jpg?201210011320',
                'http://azure.sarenza.net/static/_img/productsV4/0000043567/0000043567_112438_11.jpg?201208061553',
                'http://azure.sarenza.net/static/_img/productsV4/0000056179/0000056179_97556_11.jpg?201207251600',
                'http://azure.sarenza.net/static/_img/productsV4/0000068432/0000068432_120783_11.jpg?201211161150',
                'http://azure.sarenza.net/static/_img/productsV4/0000025768/0000025768_66989_11.jpg?201109092037',
                'http://azure.sarenza.net/static/_img/productsV4/0000061047/0000061047_106740_11.jpg?201209211309',
                'http://azure.sarenza.net/static/_img/productsV4/0000044000/0000044000_73994_11.jpg?201109052135',
                'http://azure.sarenza.net/static/_img/productsV4/0000062712/0000062712_109545_11.jpg?201209241849',
                'http://azure.sarenza.net/static/_img/productsV4/0000044793/0000044793_75284_11.jpg?201107202136',
                'http://azure.sarenza.net/static/_img/productsV4/0000039841/0000039841_66995_11.jpg?201108041649',
                'http://azure.sarenza.net/static/_img/productsV4/0000061799/0000061799_108068_11.jpg?201209241303',
                'http://azure.sarenza.net/static/_img/productsV4/0000056075/0000056075_97383_11.jpg?201209271055',
                'http://azure.sarenza.net/static/_img/productsV4/0000056032/0000056032_97305_11.jpg?201209271054',
                'http://azure.sarenza.net/static/_img/productsV4/0000026280/0000026280_42044_11.jpg?201005101734',
                'http://azure.sarenza.net/static/_img/productsV4/0000044684/0000044684_75044_11.jpg?201109202137',
                'http://azure.sarenza.net/static/_img/productsV4/0000043567/0000043567_73370_11.jpg?201109262144',
                'http://azure.sarenza.net/static/_img/productsV4/0000044684/0000044684_75032_11.jpg?201109202137',
                'http://azure.sarenza.net/static/_img/productsV4/0000043567/0000043567_112437_11.jpg?201208061553',
                'http://azure.sarenza.net/static/_img/productsV4/0000043572/0000043572_73374_11.jpg?201109262144',
                'http://azure.sarenza.net/static/_img/productsV4/0000026286/0000026286_42036_11.jpg?201005101734',
                'http://azure.sarenza.net/static/_img/productsV4/0000044684/0000044684_75059_11.jpg?201109202137',
                'http://azure.sarenza.net/static/_img/productsV4/0000043567/0000043567_73363_11.jpg?201109262144',
                'http://azure.sarenza.net/static/_img/productsV4/0000068673/0000068673_121129_11.jpg?201303200550',
                'http://azure.sarenza.net/static/_img/productsV4/0000061590/0000061590_107633_11.jpg?201209261752',
                'http://azure.sarenza.net/static/_img/productsV4/0000062700/0000062700_109523_11.jpg?201209101648',
                'http://azure.sarenza.net/static/_img/productsV4/0000059319/0000059319_128020_11.jpg?201211201145',
                'http://azure.sarenza.net/static/_img/productsV4/0000062758/0000062758_109634_11.jpg?201209261800',
                'http://azure.sarenza.net/static/_img/productsV4/0000044587/0000044587_74863_11.jpg?201109232137',
                'http://azure.sarenza.net/static/_img/productsV4/0000065129/0000065129_114229_11.jpg?201210191155',
                'http://azure.sarenza.net/static/_img/productsV4/0000061223/0000061223_107009_11.jpg?201208141201',
                'http://azure.sarenza.net/static/_img/productsV4/0000060067/0000060067_104921_11.jpg?201208101752',
                'http://azure.sarenza.net/static/_img/productsV4/0000029632/0000029632_48453_11.jpg?201007081732',
                'http://azure.sarenza.net/static/_img/productsV4/0000039425/0000039425_66339_11.jpg?201109140938',
                'http://azure.sarenza.net/static/_img/productsV4/0000044835/0000044835_75383_11.jpg?201108040235',
                'http://azure.sarenza.net/static/_img/productsV4/0000064307/0000064307_112549_11.jpg?201209131608',
                'http://azure.sarenza.net/static/_img/productsV4/0000063600/0000063600_111277_11.jpg?201212070740',
                'http://azure.sarenza.net/static/_img/productsV4/0000062151/0000062151_108651_11.jpg?201209241913',
                'http://azure.sarenza.net/static/_img/productsV4/0000039645/0000039645_66702_11.jpg?201109140937',
                'http://azure.sarenza.net/static/_img/productsV4/0000038189/0000038189_64285_11.jpg?201107142134',
                'http://azure.sarenza.net/static/_img/productsV4/0000059345/0000059345_131353_11.jpg?201212111745',
                'http://azure.sarenza.net/static/_img/productsV4/0000045567/0000045567_76518_11.jpg?201112201836',
                'http://azure.sarenza.net/static/_img/productsV4/0000064685/0000064685_113440_11.jpg?201209241301',
                'http://azure.sarenza.net/static/_img/productsV4/0000062593/0000062593_109357_11.jpg?201209050948',
                'http://azure.sarenza.net/static/_img/productsV4/0000056315/0000056315_97793_11.jpg?201211081842',
                'http://azure.sarenza.net/static/_img/productsV4/0000039857/0000039857_66969_11.jpg?201109092038',
                'http://azure.sarenza.net/static/_img/productsV4/0000047220/0000047220_79502_11.jpg?201111181834',
                'http://azure.sarenza.net/static/_img/productsV4/0000020156/0000020156_59976_11.jpg?201012081502',
                'http://azure.sarenza.net/static/_img/productsV4/0000025548/0000025548_40581_11.jpg?201004271809',
                'http://azure.sarenza.net/static/_img/productsV4/0000073785/0000073785_131341_11.jpg?201212111747',
                'http://azure.sarenza.net/static/_img/productsV4/0000062707/0000062707_109534_11.jpg?201210102043',
                'http://azure.sarenza.net/static/_img/productsV4/0000061630/0000061630_107706_11.jpg?201209031451',
                'http://azure.sarenza.net/static/_img/productsV4/0000042632/0000042632_71798_11.jpg?201109281934',
                'http://azure.sarenza.net/static/_img/productsV4/0000043752/0000043752_73577_11.jpg?201108270435',
                'http://azure.sarenza.net/static/_img/productsV4/0000067716/0000067716_119392_11.jpg?201210221943',
                'http://azure.sarenza.net/static/_img/productsV4/0000060067/0000060067_104923_11.jpg?201208101752',
                'http://azure.sarenza.net/static/_img/productsV4/0000027485/0000027485_44332_11.jpg?201005281742',
                'http://azure.sarenza.net/static/_img/productsV4/0000067836/0000067836_119602_11.jpg?201209271147',
                'http://azure.sarenza.net/static/_img/productsV4/0000061119/0000061119_106863_11.jpg?201207231045',
                'http://azure.sarenza.net/static/_img/productsV4/0000008710/0000008710_106294_11.jpg?201209101057',
                'http://azure.sarenza.net/static/_img/productsV4/0000043196/0000043196_72709_11.jpg?201107192034',
                'http://azure.sarenza.net/static/_img/productsV4/0000047710/0000047710_80498_11.jpg?201108260035',
                'http://azure.sarenza.net/static/_img/productsV4/0000040430/0000040430_67996_11.jpg?201109202039',
                'http://azure.sarenza.net/static/_img/productsV4/0000039447/0000039447_66391_11.jpg?201110182037',
                'http://azure.sarenza.net/static/_img/productsV4/0000056553/0000056553_98328_11.jpg?201208221443',
                'http://azure.sarenza.net/static/_img/productsV4/0000039240/0000039240_66065_11.jpg?201108242235',
                'http://azure.sarenza.net/static/_img/productsV4/0000039318/0000039318_66178_11.jpg?201108182134',
                'http://azure.sarenza.net/static/_img/productsV4/0000055435/0000055435_96239_11.jpg?201209211245',
                'http://azure.sarenza.net/static/_img/productsV4/0000029874/0000029874_48955_11.jpg?201007191642',
                'http://azure.sarenza.net/static/_img/productsV4/0000047393/0000047393_79870_11.jpg?201111242135',
                'http://azure.sarenza.net/static/_img/productsV4/0000062607/0000062607_109375_11.jpg?201210221210',
                'http://azure.sarenza.net/static/_img/productsV4/0000039364/0000039364_66216_11.jpg?201108291245',
                'http://azure.sarenza.net/static/_img/productsV4/0000045686/0000045686_76746_11.jpg?201108292335',
                'http://azure.sarenza.net/static/_img/productsV4/0000046497/0000046497_114748_11.jpg?201208141158',
                'http://azure.sarenza.net/static/_img/productsV4/0000040573/0000040573_68278_11.jpg?201108051216',
                'http://azure.sarenza.net/static/_img/productsV4/0000024406/0000024406_38399_11.jpg?201002241244',
                'http://azure.sarenza.net/static/_img/productsV4/0000063443/0000063443_110947_11.jpg?201210032042',
                'http://azure.sarenza.net/static/_img/productsV4/0000055648/0000055648_96631_11.jpg?201209061941',
                'http://azure.sarenza.net/static/_img/productsV4/0000069578/0000069578_122930_11.jpg?201210311942',
                'http://azure.sarenza.net/static/_img/productsV4/0000061002/0000061002_106677_11.jpg?201209101753',
                'http://azure.sarenza.net/static/_img/productsV4/0000032136/0000032136_53109_11.jpg?201010071847',
                'http://azure.sarenza.net/static/_img/productsV4/0000026850/0000026850_43076_11.jpg?201005201416',
                'http://azure.sarenza.net/static/_img/productsV4/0000046777/0000046777_78668_11.jpg?201109072138',
                'http://azure.sarenza.net/static/_img/productsV4/0000046904/0000046904_114349_11.jpg?201207111848',
                'http://azure.sarenza.net/static/_img/productsV4/0000039172/0000039172_65923_11.jpg?201108192234',
                'http://azure.sarenza.net/static/_img/productsV4/0000062707/0000062707_109535_11.jpg?201210102043',
                'http://azure.sarenza.net/static/_img/productsV4/0000030153/0000030153_49494_11.jpg?201007291703',
                'http://azure.sarenza.net/static/_img/productsV4/0000045213/0000045213_76050_11.jpg?201109132135',
                'http://azure.sarenza.net/static/_img/productsV4/0000039285/0000039285_66147_11.jpg?201110122049',
                'http://azure.sarenza.net/static/_img/productsV4/0000061609/0000061609_107671_11.jpg?201209261751',
                'http://azure.sarenza.net/static/_img/productsV4/0000039020/0000039020_65716_11.jpg?201109272240',
                'http://azure.sarenza.net/static/_img/productsV4/0000027031/0000027031_43513_11.jpg?201005251412',
                'http://azure.sarenza.net/static/_img/productsV4/0000060067/0000060067_104922_11.jpg?201208101752',
                'http://azure.sarenza.net/static/_img/productsV4/0000067836/0000067836_119601_11.jpg?201209271147',
                'http://azure.sarenza.net/static/_img/productsV4/0000041562/0000041562_69837_11.jpg?201107262137',
                'http://azure.sarenza.net/static/_img/productsV4/0000065459/0000065459_115009_11.jpg?201209171751',
                'http://azure.sarenza.net/static/_img/productsV4/0000047360/0000047360_79778_11.jpg?201111151935',
                'http://azure.sarenza.net/static/_img/productsV4/0000029401/0000029401_47871_11.jpg?201006291651',
                'http://azure.sarenza.net/static/_img/productsV4/0000027647/0000027647_44561_11.jpg?201005311631',
                'http://azure.sarenza.net/static/_img/productsV4/0000046896/0000046896_78887_11.jpg?201109052235',
                'http://azure.sarenza.net/static/_img/productsV4/0000040457/0000040457_68043_11.jpg?201111151935',
                'http://azure.sarenza.net/static/_img/productsV4/0000064900/0000064900_113774_11.jpg?201208291742',
                'http://azure.sarenza.net/static/_img/productsV4/0000029930/0000029930_66221_11.jpg?201107192035',
                'http://azure.sarenza.net/static/_img/productsV4/0000039851/0000039851_67007_11.jpg?201109051244',
                'http://azure.sarenza.net/static/_img/productsV4/0000026585/0000026585_107932_11.jpg?201207111641',
                'http://azure.sarenza.net/static/_img/productsV4/0000067840/0000067840_119606_11.jpg?201209261746',
                'http://azure.sarenza.net/static/_img/productsV4/0000046815/0000046815_78756_11.jpg?201109262036',
                'http://azure.sarenza.net/static/_img/productsV4/0000047352/0000047352_79762_11.jpg?201109072138',
                'http://azure.sarenza.net/static/_img/productsV4/0000045688/0000045688_76844_11.jpg?201108022135',
                'http://azure.sarenza.net/static/_img/productsV4/0000040435/0000040435_67994_11.jpg?201109122136',
                'http://azure.sarenza.net/static/_img/productsV4/0000040469/0000040469_68064_11.jpg?201109192240',
                'http://azure.sarenza.net/static/_img/productsV4/0000039362/0000039362_66280_11.jpg?201108121953',
                'http://azure.sarenza.net/static/_img/productsV4/0000063123/0000063123_110366_11.jpg?201207271754',
                'http://azure.sarenza.net/static/_img/productsV4/0000067827/0000067827_119584_11.jpg?201209241849',
                'http://azure.sarenza.net/static/_img/productsV4/0000044805/0000044805_75294_11.jpg?201108042336',
                'http://azure.sarenza.net/static/_img/productsV4/0000044588/0000044588_74894_11.jpg?201108101539',
                'http://azure.sarenza.net/static/_img/productsV4/0000064208/0000064208_112301_11.jpg?201208101759',
                'http://azure.sarenza.net/static/_img/productsV4/0000038681/0000038681_65157_11.jpg?201109292039',
                'http://azure.sarenza.net/static/_img/productsV4/0000061740/0000061740_107960_11.jpg?201207161342',
                'http://azure.sarenza.net/static/_img/productsV4/0000065333/0000065333_114663_11.jpg?201207161352',
                'http://azure.sarenza.net/static/_img/productsV4/0000043567/0000043567_112439_11.jpg?201208061553',
                'http://azure.sarenza.net/static/_img/productsV4/0000063600/0000063600_111278_11.jpg?201212051944',
                'http://azure.sarenza.net/static/_img/productsV4/0000065333/0000065333_114662_11.jpg?201207161941',
                'http://azure.sarenza.net/static/_img/productsV4/0000027399/0000027399_44181_11.jpg?201005281101',
                'http://azure.sarenza.net/static/_img/productsV4/0000030389/0000030389_50003_11.jpg?201008161842',
                'http://azure.sarenza.net/static/_img/productsV4/0000021049/0000021049_32285_11.jpg?200909302204',
                'http://azure.sarenza.net/static/_img/productsV4/0000061186/0000061186_106968_11.jpg?201210151554',
                'http://azure.sarenza.net/static/_img/productsV4/0000065538/0000065538_115192_11.jpg?201212121941',
                'http://azure.sarenza.net/static/_img/productsV4/0000062099/0000062099_108551_11.jpg?201211131942',
                'http://azure.sarenza.net/static/_img/productsV4/0000039424/0000039424_66348_11.jpg?201109140937',
                'http://azure.sarenza.net/static/_img/productsV4/0000056555/0000056555_98331_11.jpg?201208271047',
                'http://azure.sarenza.net/static/_img/productsV4/0000038312/0000038312_105043_11.jpg?201208141840',
                'http://azure.sarenza.net/static/_img/productsV4/0000024219/0000024219_37972_11.jpg?201002122206',
                'http://azure.sarenza.net/static/_img/productsV4/0000062607/0000062607_109376_11.jpg?201210221210',
                'http://azure.sarenza.net/static/_img/productsV4/0000062941/0000062941_110003_11.jpg?201209171842',
                'http://azure.sarenza.net/static/_img/productsV4/0000069033/0000069033_121822_11.jpg?201211221040',
                'http://azure.sarenza.net/static/_img/productsV4/0000045270/0000045270_76158_11.jpg?201109292039',
                'http://azure.sarenza.net/static/_img/productsV4/0000026609/0000026609_111285_11.jpg?201212071940',
                'http://azure.sarenza.net/static/_img/productsV4/0000063601/0000063601_111281_11.jpg?201211191041',
                'http://azure.sarenza.net/static/_img/productsV4/0000056548/0000056548_98315_11.jpg?201208291143',
                'http://azure.sarenza.net/static/_img/productsV4/0000024804/0000024804_115348_11.jpg?201209122041',
                'http://azure.sarenza.net/static/_img/productsV4/0000067791/0000067791_119532_11.jpg?201209241847',
                'http://azure.sarenza.net/static/_img/productsV4/0000020154/0000020154_43365_11.jpg?201005251006',
                'http://azure.sarenza.net/static/_img/productsV4/0000062481/0000062481_109206_11.jpg?201210221206',
                'http://azure.sarenza.net/static/_img/productsV4/0000038005/0000038005_63906_11.jpg?201108051206',
                'http://azure.sarenza.net/static/_img/productsV4/0000062814/0000062814_109763_11.jpg?201210171247',
                'http://azure.sarenza.net/static/_img/productsV4/0000045102/0000045102_75861_11.jpg?201111231936',
                'http://azure.sarenza.net/static/_img/productsV4/0000063446/0000063446_110953_11.jpg?201209171653',
                'http://azure.sarenza.net/static/_img/productsV4/0000029929/0000029929_49040_11.jpg?201007211002',
                'http://azure.sarenza.net/static/_img/productsV4/0000064999/0000064999_113953_11.jpg?201209201320',
                'http://azure.sarenza.net/static/_img/productsV4/0000040493/0000040493_68089_11.jpg?201109082036',
                'http://azure.sarenza.net/static/_img/productsV4/0000026456/0000026456_42328_11.jpg?201005121220',
                'http://azure.sarenza.net/static/_img/productsV4/0000038391/0000038391_64662_11.jpg?201107212135',
                'http://azure.sarenza.net/static/_img/productsV4/0000024406/0000024406_38398_11.jpg?201002241244',
                'http://azure.sarenza.net/static/_img/productsV4/0000024813/0000024813_39175_11.jpg?201003191837',
                'http://azure.sarenza.net/static/_img/productsV4/0000029675/0000029675_48541_11.jpg?201007091126',
                'http://azure.sarenza.net/static/_img/productsV4/0000028105/0000028105_45480_11.jpg?201006041547',
                'http://azure.sarenza.net/static/_img/productsV4/0000029415/0000029415_47863_11.jpg?201006291651',
                'http://azure.sarenza.net/static/_img/productsV4/0000037342/0000037342_62552_11.jpg?201101141655',
                'http://azure.sarenza.net/static/_img/productsV4/0000024844/0000024844_39241_11.jpg?201003221735',
                'http://azure.sarenza.net/static/_img/productsV4/0000027038/0000027038_43519_11.jpg?201005251412',
                'http://azure.sarenza.net/static/_img/productsV4/0000029967/0000029967_49106_11.jpg?201007221218',
                'http://azure.sarenza.net/static/_img/productsV4/0000043979/0000043979_73971_11.jpg?201106292237',
                'http://azure.sarenza.net/static/_img/productsV4/0000044833/0000044833_75354_11.jpg?201107262235',
                'http://azure.sarenza.net/static/_img/productsV4/0000045216/0000045216_76064_11.jpg?201109292234',
                'http://azure.sarenza.net/static/_img/productsV4/0000046617/0000046617_78391_11.jpg?201107112136',
                'http://azure.sarenza.net/static/_img/productsV4/0000037581/0000037581_63003_11.jpg?201101271710',
                'http://azure.sarenza.net/static/_img/productsV4/0000039362/0000039362_66220_11.jpg?201108051207',
                'http://azure.sarenza.net/static/_img/productsV4/0000038318/0000038318_64510_11.jpg?201107261837',
                'http://azure.sarenza.net/static/_img/productsV4/0000042649/0000042649_71827_11.jpg?201109282140',
                'http://azure.sarenza.net/static/_img/productsV4/0000038063/0000038063_64043_11.jpg?201108042235',
                'http://azure.sarenza.net/static/_img/productsV4/0000040592/0000040592_68286_11.jpg?201108051214',
                'http://azure.sarenza.net/static/_img/productsV4/0000028739/0000028739_62995_11.jpg?201101271226',
                'http://azure.sarenza.net/static/_img/productsV4/0000021049/0000021049_46747_11.jpg?201006181235',
                'http://azure.sarenza.net/static/_img/productsV4/0000045588/0000045588_76529_11.jpg?201108291241',
                'http://azure.sarenza.net/static/_img/productsV4/0000038005/0000038005_63907_11.jpg?201108121953',
                'http://azure.sarenza.net/static/_img/productsV4/0000067836/0000067836_119600_11.jpg?201209271146',
                'http://azure.sarenza.net/static/_img/productsV4/0000044182/0000044182_74296_11.jpg?201109062137',
                'http://azure.sarenza.net/static/_img/productsV4/0000047352/0000047352_79763_11.jpg?201109052236',
                'http://azure.sarenza.net/static/_img/productsV4/0000038644/0000038644_65100_11.jpg?201109051307',
                'http://azure.sarenza.net/static/_img/productsV4/0000046497/0000046497_78252_11.jpg?201109072137',
                'http://azure.sarenza.net/static/_img/productsV4/0000045273/0000045273_76164_11.jpg?201109051240',
                'http://azure.sarenza.net/static/_img/productsV4/0000040783/0000040783_68571_11.jpg?201109231958',
                'http://azure.sarenza.net/static/_img/productsV4/0000039297/0000039297_66140_11.jpg?201109222043',
                'http://azure.sarenza.net/static/_img/productsV4/0000045267/0000045267_76161_11.jpg?201109051240',
                'http://azure.sarenza.net/static/_img/productsV4/0000038676/0000038676_65182_11.jpg?201110042036',
                'http://azure.sarenza.net/static/_img/productsV4/0000061421/0000061421_107377_11.jpg?201210191152',
                'http://azure.sarenza.net/static/_img/productsV4/0000039804/0000039804_66936_11.jpg?201110132136',
                'http://azure.sarenza.net/static/_img/productsV4/0000053327/0000053327_91070_11.jpg?201112151935',
                'http://azure.sarenza.net/static/_img/productsV4/0000029874/0000029874_48947_11.jpg?201007191642'
            ];

            $scope.showMoreButton = function() {
                return $scope.nbAffichage >= visuels.length;
            };

            var v = [[]];
            for (var j=0; j < (visuels.length % 12); j++) {
                for (var i=0;i<visuels.length;i++) {
                    v[j][i]=visuels[i];
                }
            }

            $scope.visuelsDisplayed=v;

        }])

    }])
;