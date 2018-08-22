var educationBranchText = "education";
var experienceBranchText = "experience";
var gameJamBranchText = "game jam";
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

var igsQuitText = "不想再做博弈類遊戲，離職與前同事到前主管開的新遊戲公司"
var maxonQuitText = "專案取消，全體資遣"
var sigonoQuitText = "專案告一段落，公司的遊戲類型與興趣不合"

var gameJame2016Text = "The Magnificently Unholy Quest of the Mighty Sword of Sweet Blessings";
var gameJame2017Text = "Life Journey";

var gitgraph = new GitGraph({
  template: "metro",
  orientation: "vertical",
  mode: "compact"
});

var educationBranch = gitgraph.branch({name: educationBranchText, column: 1 });
educationBranch.commit( bsText ).commit( msText );
var experienceBranch = educationBranch.branch( {name: experienceBranchText, column: 3 } );
experienceBranch.commit( igsText1 );
var igsJobBranch = experienceBranch.branch( {name: igsBranchText, column: 4 } );
igsJobBranch.commit( sdkProjText ).commit( mjProjText );
experienceBranch.commit( igsText2 );
experienceBranch.commit( igsText3 );
igsJobBranch.merge( experienceBranch, igsQuitText );
experienceBranch.commit( maxonText );
var maxonJobBranch = experienceBranch.branch( {name: maxonBranchText, column: 4 } );
maxonJobBranch.commit( vegaProjText ).commit( galileeProjText ).commit( ichibanProjText );
maxonJobBranch.merge( experienceBranch, maxonQuitText );
var sigonoJobBranch = experienceBranch.branch( {name: sigonoBranchText, column: 4 } );
var gameJamBranch = educationBranch.branch( {name: gameJamBranchText, column: 2 } );
gameJamBranch.commit( gameJame2016Text );
sigonoJobBranch.commit( beyondProjText );
gameJamBranch.commit( gameJame2017Text );
sigonoJobBranch.commit( heavenProjText );
sigonoJobBranch.merge( experienceBranch, sigonoQuitText );
