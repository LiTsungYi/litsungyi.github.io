var educationBranchText = "education";
var experienceBranchText = "experience";
var igsBranchText = "igs";
var maxonBranchText = "maxon";

var bsText = "逢甲大學電機系 (2000-2004)";
var msText = "逢甲大學資工所 (2004-2006)";
var igsText = "鈊象電子 (軟體工程師: 2008-2011; 資深軟體工程師: 2011-2014; 主任: 2014)";
var maxonText = "麥成文創 (軟體架構師: 2014-2015)";

var sdkProjText = "GameTower SDK";
var mjProjText = "明星三缺一 Win8";
var vegaProjText = "織女星寵 (APP)";
var galileeProjText = "加利利旅遊 (APP)";
var ichibanProjText = "百萬智多星 (APP)";

var gitgraph = new GitGraph({
  template: "metro",
  orientation: "vertical",
  mode: "compact"
});

var educationBranch = gitgraph.branch( educationBranchText );
educationBranch.commit( bsText ).commit( msText );
var experienceBranch = educationBranch.branch( experienceBranchText );
experienceBranch.commit( igsText );
var igsJobBranch = experienceBranch.branch( igsBranchText );
igsJobBranch.commit( sdkProjText ).commit( mjProjText );
igsJobBranch.merge( experienceBranch );
experienceBranch.commit( maxonText );
var maxonJobBranch = experienceBranch.branch( maxonBranchText );
maxonJobBranch.commit( vegaProjText ).commit( galileeProjText ).commit( ichibanProjText );
maxonJobBranch.merge( experienceBranch );
educationBranch.commit( "改變成真" );