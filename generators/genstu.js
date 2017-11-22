
// 新增的学生和postdoc 只需要按照这个格式添加就可以了
// 直接在最后添加，注意这个也是用逗号隔开每一行
// 最后一行没有逗号
// 然后直接按照数字递增添加图片到img/members 里面即可
// 图片格式要求 512*512px jpg格式。
// 


var arr = [
	['Prof. Jacky Wing Yip LAM','Research Assistant Professor','chjacky@ust.hk'],
	['Dr. Ryan Tsz Kin KWOK','Research Assistant Professor','chryan@ust.hk'],
	['Dr. Leo Ni XIE','Postdoc Fellow','aiexn@ust.hk'],
	['Dr. Yuncong CHEN','Postdoc Fellow','chenyc@ust.hk'],
	['Dr. Zheng ZHAO','Postdoc Fellow','zhaozheng@ust.hk'],
	['Dr. Xiujuan SHI','Postdoc Fellow','xiujuanshi@ust.hk'],
	['Dr. Huiqing PENG','Postdoc Fellow','phq@ust.hk'],
	['Dr. Wei QIN','Postdoc Fellow','qinwei@ust.hk'],
	['Dr. Weijie ZHANG','Postdoc Fellow','zhangweijie@ust.hk'],
	['Dr. Mengchen YUE','Postdoc Fellow','mengchenyue@ust.hk'],
	['Dr. Ying LI','Postdoc Fellow','liyingwcy@ust.hk'],
	['Dr. Ming CHEN','Postdoc Fellow','mingchen@ust.hk'],
	['Dr. Sheng XIE','Postdoc Fellow','shengxie@ust.hk'],
	['Dr. Dong WANG','Postdoc Fellow','wangdongchem@ust.hk'],
	['Dr. Lucia VIGLIANTI','Postdoc Fellow','luciav@ust.hk'],
	['Dr. Ji QI','Postdoc Fellow','qiji@ust.hk'],
	['Dr. Parvej ALAM','Postdoc Fellow','parvej@ust.hk'],
	['Dr. Jianguo WANG','Postdoc Fellow','wangjianguo@ust.hk'],
	['Dr. Haitao FENG','Postdoc Fellow','haitaofeng@ust.hk'],
	['Dr. Peifa WEI','Postdoc Fellow','peifawei@ust.hk'],
	['Dr. Yong LIU','Postdoc Fellow','liuyonghd@ust.hk'],
	['Dr. Guogang SHAN','Postdoc Fellow','ggshan@ust.hk'],
	['Dr. Dongfeng DANG','Postdoc Fellow','dongfengdang@ust.hk'],
	['Dr. Guangle NIU','Postdoc Fellow','niugl@ust.hk'],
	['Dr. Shunjie LIU','Postdoc Fellow','shujieliu@ust.hk'],
	['Dr. Zheng ZHENG','Postdoc Fellow','zhengzheng@ust.hk'],
	['Dr. Fengyan SONG','Postdoc Fellow','fengyansong@ust.hk'],
	['Dr. Didi CHEN','Postdoc Fellow','chendidi@ust.hk'],
	['Dr. Zhiyang Liu','Postdoc Fellow','liuzhiyang@ust.hk'],
	['Dr. Xianglong Hu','Postdoc Fellow','xlhu@ust.hk'],
	['Dr. Pengfei Gao','Postdoc Fellow','gpf@ust.hk'],
	['Dr. Zhao Li','Postdoc Fellow','billzhao@ust.hk'],
	['Dr. Jing Zhang','Postdoc Fellow','zhangjing@ust.hk'],
	['Dr. Benzhao He','Postdoc Fellow','hebenzhao@ust.hk'],
	['Dr. Xuepeng Zhang','Postdoc Fellow','zhangxp@ust.hk'],
	['Dr. ChengCheng Zhou','Postdoc Fellow','zccdxj@ust.hk'],
	['Mr. Nelson LEUNG','Ph.D Student','nlcleung@ust.hk'],
	['Miss. Meijuan JIANG','Ph.D Student','mjiangae@ust.hk'],
	['Mr. Weijun ZHAO','Ph.D Student','zhaoab@ust.hk'],
	['Miss. Chen GUI','Ph.D Student','cgui@ust.hk'],
	['Mr. Zijie QIU','Ph.D Student','zqiuaa@ust.hk'],
	['Miss. Ting HAN','Ph.D Student','thanac@ust.hk'],
	['Mr. Alec NICOL','Ph.D Student','awnicol@ust.hk'],
	['Mr. Chun Sing LEUNG','Ph.D Student','csleung@ust.hk'],
	['Mr. Hoi Pang SUNG','Ph.D Student','hpsung@ust.hk'],
	['Mr. Pengfei ZHANG','Ph.D Student','pzhangad@ust.hk'],
	['Mr. Haoke ZHANG','Ph.D Student','hzhangaz@ust.hk'],
	['Miss.Xu WANG','Ph.D Student','xwangbs@ust.hk'],
	['Miss.Qingqing GAO','Ph.D Student','qgao@ust.hk'],
	['Mr. Xuewen HE','Ph.D Student','xheao@ust.hk'],
	['Miss. Yubing HU','Ph.D Student','yhuas@ust.hk'],
	['Mr. Yuan GU','Ph.D Student','ygual@ust.hk'],
	['Miss. Yujie TU','Ph.D Student','ytuaa@ust.hk'],
	['Mr. Wenjie WU','Ph.D Student','wwuaq@ust.hk'],
	['Mr. Haixiang LIU','Ph.D Student','hliubg@ust.hk'],
	['Mr. Changhuo XU','Ph.D Student','cxuaj@ust.hk'],
	['Miss. Michidmaa KHORLOO','Ph.D Student','mkhorloo@ust.hk'],
	['Miss. Mei Suet Lee','Ph.D Student','msleead@connect.ust.hk'],
	['Mr. Tsz Shing Cheung','Ph.D Student','tscheungaa@connect.ust.hk'],
	['Mr. Xueqian Zhao','Ph.D Student','xzhaoax@connect.ust.hk'],
	['Miss. Ying Yu','Ph.D Student','yyuba@connect.ust.hk'],
	['Miss. Xiaolin Liu','Ph.D Student','xliuco@connect.ust.hk'],
	['Miss. Qiyao Li','Ph.D Student','qlibk@connect.ust.hk'],
	['Mr. Wei He','Ph.D Student','wheaf@connect.ust.hk'],
	['Mr. Tianfu Zhang','Ph.D Student','tzhangay@connect.ust.hk'],
	['Miss. Hojeong Bonnie Park','Ph.D Student','hjpark@connect.ust.hk'],
	['Miss. Zhaoyu Wang','Mphil Student','zwangch@ust.hk'],
	['Miss. Dan Jin','Mphil Student','djin@connect.ust.hk'],
	['Mr. Will Wai Hang LEE','Research Assistant','chwhlee@ust.hk'],
	['Miss. Wenhan Xu','Research Assistant','whxu@ust.hk']
];


function generateHTML(message, category, count) {
	return '\n\
	\<div class=\"span4 teampage element ' + category + '\" data-category=\"' + category + '\>\n\
		\<div class=\"team_sections fadeindown\"\>\n\
			\<img alt=\"\" src=\"img\/members\/' + count + '.jpg\" class=\"th \"\/\>\n\
			\<h5\>\<span\>' + message[0] + '\<\/span\>\<\/h5\>\n\
			\<p\>\<small class=\"muted normal\"\>- ' + message[1] + ' - \<\/small\>\<\/p\>\n\
			\<hr class=\"team-line\"\>\n\
			\n\
			\<a href=\"mailto:' + message[2] + '\" class=\"zocial icon email team_ic\"\>\<\/a\>\n\
      		\<div class=\'lead\'\>'+ message[2] + '\<\/div\>\n\
			\<\/div\>\n\
			\<div class=\"pad15\"\>\<\/div\>\n\
		\<\/div\>\n\
		';
}

var res = [];
var category = {
	'Research Assistant Professor': 'category01',
	'Postdoc Fellow': 'category02',
	'Ph.D Student': 'category03',
	'Research Assistant': 'category03',
	'Mphil Student': 'category03'
}
for (var i = 0 ; i < arr.length ; i++) {
	res.push(generateHTML(arr[i] , category[arr[i][1]] , i+1));
}

document.body.innerText = res.join('\n');

