var educationBranchText = "education";
var experienceBranchText = "experience";
var igsBranchText = "igs";
var maxonBranchText = "maxon";
var sigonoBranchText = "sigono";

var bsText = "逢甲大學電機系 (2000-2004)";
var msText = "逢甲大學資工所 (2004-2006)";
var igsText1 = "鈊象電子 (軟體工程師: 200802-201103)";
var igsText2 = "鈊象電子 (資深軟體工程師: 201103-201402)";
var igsText3 = "鈊象電子 (軟體主任: 201403-201405)";
var maxonText = "麥成文創 (軟體架構師: 201405-201511)";
var sigonoText = "信革數位 (資深工程師: 201601-201808)";

var sdkProjText = "GameTower SDK";
var mjProjText = "明星三缺一 Win8 (WP)";
var vegaProjText = "織女星寵 (Android)";
var galileeProjText = "加利利旅遊 (Android/iOS)";
var ichibanProjText = "百萬智多星 (Android/iOS)";
var beyondProjText = "地球計畫 (Android/iOS/Steam/Switch/MacOS)";
var heavenProjText = "靈魂之橋 (Android/iOS/Steam/Switch/MacOS)";


var gitgraph = new GitGraph({
  template: "metro",
  orientation: "vertical",
  mode: "compact"
});

var educationBranch = gitgraph.branch( educationBranchText );
educationBranch.commit( bsText ).commit( msText );
var experienceBranch = educationBranch.branch( experienceBranchText );
experienceBranch.commit( igsText1 );
var igsJobBranch = experienceBranch.branch( igsBranchText );
igsJobBranch.commit( sdkProjText ).commit( mjProjText );
experienceBranch.commit( igsText2 );
experienceBranch.commit( igsText3 );
igsJobBranch.merge( experienceBranch );
experienceBranch.commit( maxonText );
var maxonJobBranch = experienceBranch.branch( maxonBranchText );
maxonJobBranch.commit( vegaProjText ).commit( galileeProjText ).commit( ichibanProjText );
maxonJobBranch.merge( experienceBranch );
var sigonoJobBranch = experienceBranch.branch( sigonoBranchText );
sigonoJobBranch.commit( beyondProjText ).commit( heavenProjText );
sigonoJobBranch.merge( experienceBranch );