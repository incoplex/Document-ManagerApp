﻿window.myapp=msls.application,function(n){function o(n){i.call(this,n)}function l(n){i.call(this,n)}function f(n){i.call(this,n)}function e(n){i.call(this,n)}function s(n){i.call(this,n)}function a(n){i.call(this,n)}function c(n){i.call(this,n)}function h(n){i.call(this,n)}function v(n){i.call(this,n)}function y(n){p.call(this,n)}function d(){w.call(this)}var i=msls.Entity,p=msls.DataService,w=msls.DataWorkspace,r=msls._defineEntity,b=msls._defineDataService,k=msls._defineDataWorkspace,t=msls.DataServiceQuery,u=msls._toODataString;msls._addToNamespace("msls.application",{Document:r(o,[{name:"Id",type:Number},{name:"DocumentTitle",type:String},{name:"Reference",type:String},{name:"InUse",type:Boolean},{name:"DocumentType",kind:"reference",type:l},{name:"DocumentOwner",kind:"reference",type:f},{name:"DocumentVersions",kind:"collection",elementType:e},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),DocumentType:r(l,[{name:"Id",type:Number},{name:"DocumentTypeCode",type:String},{name:"DocumentTypeDescription",type:String},{name:"Documents",kind:"collection",elementType:o},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),Employee:r(f,[{name:"Id",type:Number},{name:"LastName",type:String},{name:"FirstName",type:String},{name:"UserName",type:String},{name:"Email",type:String},{name:"Current",type:Boolean},{name:"Documents",kind:"collection",elementType:o},{name:"DocumentVersions",kind:"collection",elementType:e},{name:"DocumentVersionHolders",kind:"collection",elementType:s},{name:"DocumentVersionApprovals",kind:"collection",elementType:c},{name:"ChangeRequests",kind:"collection",elementType:h},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),DocumentVersion:r(e,[{name:"Id",type:Number},{name:"Document",kind:"reference",type:o},{name:"Author",kind:"reference",type:f},{name:"MajorVersionNumber",type:Number},{name:"MinorVersionNumber",type:Number},{name:"Changes",type:String},{name:"EffectiveDate",type:Date},{name:"DocumentStatus",type:String},{name:"DocumentVersionApprovals",kind:"collection",elementType:c},{name:"DocumentVersionHolders",kind:"collection",elementType:s},{name:"ChangeRequests",kind:"collection",elementType:h},{name:"DocumentName",type:String},{name:"StoredDocument",type:String},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),DocumentVersionHolder:r(s,[{name:"Id",type:Number},{name:"DateDistributedTo",type:Date},{name:"DateAcknowledged",type:Date},{name:"DocumentVersion",kind:"reference",type:e},{name:"CopyHolder",kind:"reference",type:f},{name:"DocumentVersionReviews",kind:"collection",elementType:a},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),DocumentVersionReview:r(a,[{name:"Id",type:Number},{name:"DateDue",type:Date},{name:"DateCompleted",type:Date},{name:"Outcome",type:String},{name:"DocumentVersionHolder",kind:"reference",type:s},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),DocumentVersionApproval:r(c,[{name:"Id",type:Number},{name:"DocumentVersion",kind:"reference",type:e},{name:"Approver",kind:"reference",type:f},{name:"ApprovalStatus",type:String},{name:"ApprovalStatusDate",type:Date},{name:"ApproverComments",type:String},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),ChangeRequest:r(h,[{name:"Id",type:Number},{name:"Reference",type:String},{name:"ChangeRequestTitle",type:String},{name:"ChangeRequestDescription",type:String},{name:"RaisedBy",kind:"reference",type:f},{name:"DateRaised",type:Date},{name:"TargetClosureDate",type:Date},{name:"ChangeRequestStatus",kind:"reference",type:v},{name:"DateClosed",type:Date},{name:"DocumentVersion",kind:"reference",type:e},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),ChangeRequestStatus:r(v,[{name:"Id",type:Number},{name:"Status",type:String},{name:"ChangeRequests",kind:"collection",elementType:h},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),ApplicationData:b(y,n.rootUri+"/ApplicationData.svc",[{name:"Documents",elementType:o},{name:"DocumentTypes",elementType:l},{name:"Employees",elementType:f},{name:"DocumentVersions",elementType:e},{name:"DocumentVersionHolders",elementType:s},{name:"DocumentVersionReviews",elementType:a},{name:"DocumentVersionApprovals",elementType:c},{name:"ChangeRequests",elementType:h},{name:"ChangeRequestStatuses",elementType:v}],[{name:"Documents_SingleOrDefault",value:function(i){return new t({_entitySet:this.Documents},n.rootUri+"/ApplicationData.svc/Documents(Id="+u(i,"Int32?")+")")}},{name:"DocumentTypes_SingleOrDefault",value:function(i){return new t({_entitySet:this.DocumentTypes},n.rootUri+"/ApplicationData.svc/DocumentTypes(Id="+u(i,"Int32?")+")")}},{name:"Employees_SingleOrDefault",value:function(i){return new t({_entitySet:this.Employees},n.rootUri+"/ApplicationData.svc/Employees(Id="+u(i,"Int32?")+")")}},{name:"DocumentVersions_SingleOrDefault",value:function(i){return new t({_entitySet:this.DocumentVersions},n.rootUri+"/ApplicationData.svc/DocumentVersions(Id="+u(i,"Int32?")+")")}},{name:"DocumentVersionHolders_SingleOrDefault",value:function(i){return new t({_entitySet:this.DocumentVersionHolders},n.rootUri+"/ApplicationData.svc/DocumentVersionHolders(Id="+u(i,"Int32?")+")")}},{name:"DocumentVersionReviews_SingleOrDefault",value:function(i){return new t({_entitySet:this.DocumentVersionReviews},n.rootUri+"/ApplicationData.svc/DocumentVersionReviews(Id="+u(i,"Int32?")+")")}},{name:"DocumentVersionApprovals_SingleOrDefault",value:function(i){return new t({_entitySet:this.DocumentVersionApprovals},n.rootUri+"/ApplicationData.svc/DocumentVersionApprovals(Id="+u(i,"Int32?")+")")}},{name:"ChangeRequests_SingleOrDefault",value:function(i){return new t({_entitySet:this.ChangeRequests},n.rootUri+"/ApplicationData.svc/ChangeRequests(Id="+u(i,"Int32?")+")")}},{name:"ChangeRequestStatuses_SingleOrDefault",value:function(i){return new t({_entitySet:this.ChangeRequestStatuses},n.rootUri+"/ApplicationData.svc/ChangeRequestStatuses(Id="+u(i,"Int32?")+")")}},{name:"MyHeldDocumentVersions",value:function(){return new t({_entitySet:this.DocumentVersionHolders},n.rootUri+"/ApplicationData.svc/MyHeldDocumentVersions()",{})}},{name:"MyOwnedDocuments",value:function(){return new t({_entitySet:this.Documents},n.rootUri+"/ApplicationData.svc/MyOwnedDocuments()",{})}},{name:"MyAuthoredDocumentVersions",value:function(){return new t({_entitySet:this.DocumentVersions},n.rootUri+"/ApplicationData.svc/MyAuthoredDocumentVersions()",{})}},{name:"MyDocumentReviews",value:function(){return new t({_entitySet:this.DocumentVersionReviews},n.rootUri+"/ApplicationData.svc/MyDocumentReviews()",{})}},{name:"MyDocumentVersionApprovals",value:function(){return new t({_entitySet:this.DocumentVersionApprovals},n.rootUri+"/ApplicationData.svc/MyDocumentVersionApprovals()",{})}}]),DataWorkspace:k(d,[{name:"ApplicationData",type:y}])})}(msls.application),function(n){function f(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditChangeRequest",t)}function e(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditChangeRequestStatus",t)}function o(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditDocument",t)}function s(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditDocumentType",t)}function h(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditDocumentVersion",t)}function c(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditDocumentVersionApproval",t)}function l(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditDocumentVersionHolder",t)}function a(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditDocumentVersionReview",t)}function v(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditEmployee",t)}function y(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddStoredDocument",t)}function p(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseChangeRequestStatuses",t)}function w(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseDocuments",t)}function b(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseDocumentsByDocumentTypes",t)}function k(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseDocumentTypes",t)}function d(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseEmployees",t)}function g(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseMyAuthoredDocumentVersions",t)}function nt(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseMyDocumentReviews",t)}function tt(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseMyDocumentVersionApprovals",t)}function it(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseMyHeldDocumentVersions",t)}function rt(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseMyOwnedDocuments",t)}function ut(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"Home",t)}function ft(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"MobileHome",t)}function et(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"MobileSettings",t)}var i=msls.Screen,r=msls._defineScreen,ot=msls.DataServiceQuery,t=msls._toODataString,u=msls._defineShowScreen;msls._addToNamespace("msls.application",{AddEditChangeRequest:r(f,[{name:"ChangeRequest",kind:"local",type:n.ChangeRequest}],[]),AddEditChangeRequestStatus:r(e,[{name:"ChangeRequestStatus",kind:"local",type:n.ChangeRequestStatus}],[]),AddEditDocument:r(o,[{name:"Document",kind:"local",type:n.Document},{name:"DocumentVersions",kind:"collection",elementType:n.DocumentVersion,getNavigationProperty:function(){return this.owner.Document?this.owner.Document.details.properties.DocumentVersions:null},appendQuery:function(){return this.expand("Author")}}],[]),AddEditDocumentType:r(s,[{name:"DocumentType",kind:"local",type:n.DocumentType}],[]),AddEditDocumentVersion:r(h,[{name:"DocumentVersion",kind:"local",type:n.DocumentVersion},{name:"DocumentVersionApprovals",kind:"collection",elementType:n.DocumentVersionApproval,getNavigationProperty:function(){return this.owner.DocumentVersion?this.owner.DocumentVersion.details.properties.DocumentVersionApprovals:null},appendQuery:function(){return this.expand("Approver")}},{name:"DocumentVersionHolders",kind:"collection",elementType:n.DocumentVersionHolder,getNavigationProperty:function(){return this.owner.DocumentVersion?this.owner.DocumentVersion.details.properties.DocumentVersionHolders:null},appendQuery:function(){return this.expand("CopyHolder")}},{name:"ChangeRequests",kind:"collection",elementType:n.ChangeRequest,getNavigationProperty:function(){return this.owner.DocumentVersion?this.owner.DocumentVersion.details.properties.ChangeRequests:null},appendQuery:function(){return this.expand("RaisedBy").expand("ChangeRequestStatus")}}],[{name:"DownLoadDocument"},{name:"DownloadDocument_Tap"},{name:"DeleteDocument"}]),AddEditDocumentVersionApproval:r(c,[{name:"DocumentVersionApproval",kind:"local",type:n.DocumentVersionApproval}],[]),AddEditDocumentVersionHolder:r(l,[{name:"DocumentVersionHolder",kind:"local",type:n.DocumentVersionHolder},{name:"DocumentVersionReviews",kind:"collection",elementType:n.DocumentVersionReview,getNavigationProperty:function(){return this.owner.DocumentVersionHolder?this.owner.DocumentVersionHolder.details.properties.DocumentVersionReviews:null},appendQuery:function(){return this}}],[]),AddEditDocumentVersionReview:r(a,[{name:"DocumentVersionReview",kind:"local",type:n.DocumentVersionReview}],[]),AddEditEmployee:r(v,[{name:"Employee",kind:"local",type:n.Employee}],[]),AddStoredDocument:r(y,[{name:"DocumentVersion",kind:"local",type:n.DocumentVersion}],[]),BrowseChangeRequestStatuses:r(p,[{name:"ChangeRequestStatuses",kind:"collection",elementType:n.ChangeRequestStatus,createQuery:function(n){return this.dataWorkspace.ApplicationData.ChangeRequestStatuses.filter(""+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", Status)")+"").orderBy("Status")}},{name:"Search",kind:"local",type:String}],[]),BrowseDocuments:r(w,[{name:"Documents",kind:"collection",elementType:n.Document,createQuery:function(n,i){return this.dataWorkspace.ApplicationData.Documents.filter(""+(n===undefined||n===null?"false":"(DocumentType/Id eq "+t(n,"Int32?")+")")+" and ((("+(i===undefined||i===null?"true":"substringof("+t(i,"String?")+", DocumentTitle)")+" or "+(i===undefined||i===null?"true":"substringof("+t(i,"String?")+", Reference)")+") or "+(i===undefined||i===null?"true":"substringof("+t(i,"String?")+", DocumentOwner/FirstName)")+") or "+(i===undefined||i===null?"true":"substringof("+t(i,"String?")+", DocumentOwner/LastName)")+")").orderBy("DocumentTitle").expand("DocumentOwner")}},{name:"DocumentTypeId",kind:"local",type:Number},{name:"DocumentType",kind:"local",type:String},{name:"Search",kind:"local",type:String}],[]),BrowseDocumentsByDocumentTypes:r(b,[{name:"DocumentTypes",kind:"collection",elementType:n.DocumentType,createQuery:function(n){return this.dataWorkspace.ApplicationData.DocumentTypes.filter(""+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", DocumentTypeCode)")+" or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", DocumentTypeDescription)")+"")}},{name:"Search",kind:"local",type:String}],[]),BrowseDocumentTypes:r(k,[{name:"DocumentTypes",kind:"collection",elementType:n.DocumentType,createQuery:function(n){return this.dataWorkspace.ApplicationData.DocumentTypes.filter(""+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", DocumentTypeCode)")+" or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", DocumentTypeDescription)")+"").orderBy("DocumentTypeCode")}},{name:"Search",kind:"local",type:String}],[]),BrowseEmployees:r(d,[{name:"Employees",kind:"collection",elementType:n.Employee,createQuery:function(n){return this.dataWorkspace.ApplicationData.Employees.filter("("+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", FirstName)")+" or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", LastName)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", UserName)")+"").orderBy("LastName").thenBy("FirstName").thenBy("UserName")}},{name:"Search",kind:"local",type:String}],[]),BrowseMyAuthoredDocumentVersions:r(g,[{name:"MyAuthoredDocumentVersions",kind:"collection",elementType:n.DocumentVersion,createQuery:function(n){return this.dataWorkspace.ApplicationData.MyAuthoredDocumentVersions().filter("("+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", Document/Reference)")+" or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", Document/DocumentTitle)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", DocumentStatus)")+"").expand("Document")}},{name:"Search",kind:"local",type:String}],[]),BrowseMyDocumentReviews:r(nt,[{name:"MyDocumentReviews",kind:"collection",elementType:n.DocumentVersionReview,createQuery:function(n){return this.dataWorkspace.ApplicationData.MyDocumentReviews().filter(""+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", DocumentVersionHolder/DocumentVersion/Document/Reference)")+" or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", DocumentVersionHolder/DocumentVersion/Document/DocumentTitle)")+"").expand("DocumentVersionHolder").expand("DocumentVersionHolder.DocumentVersion").expand("DocumentVersionHolder.DocumentVersion.Document")}},{name:"Search",kind:"local",type:String}],[]),BrowseMyDocumentVersionApprovals:r(tt,[{name:"MyDocumentVersionApprovals",kind:"collection",elementType:n.DocumentVersionApproval,createQuery:function(n){return this.dataWorkspace.ApplicationData.MyDocumentVersionApprovals().filter("("+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", DocumentVersion/Document/Reference)")+" or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", DocumentVersion/Document/DocumentTitle)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", ApprovalStatus)")+"").expand("DocumentVersion").expand("DocumentVersion.Document")}},{name:"Search",kind:"local",type:String}],[]),BrowseMyHeldDocumentVersions:r(it,[{name:"MyHeldDocumentVersions",kind:"collection",elementType:n.DocumentVersionHolder,createQuery:function(n){return this.dataWorkspace.ApplicationData.MyHeldDocumentVersions().filter(""+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", DocumentVersion/Document/Reference)")+" or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", DocumentVersion/Document/DocumentTitle)")+"").expand("DocumentVersion").expand("DocumentVersion.Document")}},{name:"Search",kind:"local",type:String}],[]),BrowseMyOwnedDocuments:r(rt,[{name:"MyOwnedDocuments",kind:"collection",elementType:n.Document,createQuery:function(n){return this.dataWorkspace.ApplicationData.MyOwnedDocuments().filter("("+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", DocumentType/DocumentTypeCode)")+" or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", Reference)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", DocumentTitle)")+"").expand("DocumentType")}},{name:"Search",kind:"local",type:String}],[]),Home:r(ut,[],[{name:"Blank"}]),MobileHome:r(ft,[],[{name:"Blank"}]),MobileSettings:r(et,[],[{name:"Blank"}]),showAddEditChangeRequest:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditChangeRequest",r,i)}),showAddEditChangeRequestStatus:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditChangeRequestStatus",r,i)}),showAddEditDocument:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditDocument",r,i)}),showAddEditDocumentType:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditDocumentType",r,i)}),showAddEditDocumentVersion:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditDocumentVersion",r,i)}),showAddEditDocumentVersionApproval:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditDocumentVersionApproval",r,i)}),showAddEditDocumentVersionHolder:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditDocumentVersionHolder",r,i)}),showAddEditDocumentVersionReview:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditDocumentVersionReview",r,i)}),showAddEditEmployee:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditEmployee",r,i)}),showAddStoredDocument:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddStoredDocument",r,i)}),showBrowseChangeRequestStatuses:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseChangeRequestStatuses",i,t)}),showBrowseDocuments:u(function(t,i,r){var u=Array.prototype.slice.call(arguments,0,2);return n.showScreen("BrowseDocuments",u,r)}),showBrowseDocumentsByDocumentTypes:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseDocumentsByDocumentTypes",i,t)}),showBrowseDocumentTypes:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseDocumentTypes",i,t)}),showBrowseEmployees:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseEmployees",i,t)}),showBrowseMyAuthoredDocumentVersions:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseMyAuthoredDocumentVersions",i,t)}),showBrowseMyDocumentReviews:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseMyDocumentReviews",i,t)}),showBrowseMyDocumentVersionApprovals:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseMyDocumentVersionApprovals",i,t)}),showBrowseMyHeldDocumentVersions:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseMyHeldDocumentVersions",i,t)}),showBrowseMyOwnedDocuments:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseMyOwnedDocuments",i,t)}),showHome:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("Home",i,t)}),showMobileHome:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("MobileHome",i,t)}),showMobileSettings:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("MobileSettings",i,t)})})}(msls.application),myapp.AddEditChangeRequest.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditChangeRequests"]?!1:!0},myapp.AddEditChangeRequestStatus.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditChangeRequestStatuses"]?!1:!0},myapp.AddEditDocument.created=function(n){var t;n.Document.DocumentTitle!==undefined?(t=n.Document.DocumentTitle,n.details.displayName="Edit "+t):n.details.displayName="Add New Document",myapp.permissions["LightSwitchApplication:CanEditDocuments"]?(n.findContentItem("DetailsTab").isReadOnly=!1,n.findContentItem("DocumentVersionsListTab").isReadOnly=!1):(n.findContentItem("DetailsTab").isReadOnly=!0,n.findContentItem("DocumentVersionsListTab").isReadOnly=!0)},myapp.AddEditDocumentType.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditDocumentTypes"]?!1:!0},myapp.AddEditDocumentVersion.created=function(n){var t,i;t=n.DocumentVersion.Document.DocumentTitle,n.DocumentVersion.MajorVersionNumber!==undefined?(i=n.DocumentVersion.MajorVersionNumber+"."+n.DocumentVersion.MinorVersionNumber,n.details.displayName=t+" v("+i+")"):n.details.displayName=t+" v(NEW)",n.DocumentVersion.StoredDocument!==null?(n.findContentItem("ShowAddStoredDocument").isEnabled=!1,n.findContentItem("DownloadDocument").isEnabled=!0,n.findContentItem("DeleteDocument").isEnabled=!0):(n.findContentItem("ShowAddStoredDocument").isEnabled=!0,n.findContentItem("DownloadDocument").isEnabled=!1,n.findContentItem("DeleteDocument").isEnabled=!1),myapp.permissions["LightSwitchApplication:CanEditDocumentVersionHolders"]?(n.findContentItem("DetailsTab").isReadOnly=!1,n.findContentItem("ApprovalsTab").isReadOnly=!1,n.findContentItem("VersonHoldersTab").isReadOnly=!1,n.findContentItem("ChangeRequestsTab").isReadOnly=!1):(n.findContentItem("DetailsTab").isReadOnly=!0,n.findContentItem("ApprovalsTab").isReadOnly=!0,n.findContentItem("VersonHoldersTab").isReadOnly=!0,n.findContentItem("ChangeRequestsTab").isReadOnly=!0)},myapp.AddEditDocumentVersion.DownloadDocument_Tap_execute=function(n){var t=n.DocumentVersion.Id,i="../DownloadDocument.aspx?Id="+t;window.open(i)},myapp.AddEditDocumentVersion.DeleteDocument_execute=function(n){n.DocumentVersion.DocumentName=null,n.DocumentVersion.StoredDocument=null,n.findContentItem("ShowAddStoredDocument").isEnabled=!0,n.findContentItem("DownloadDocument").isEnabled=!1,n.findContentItem("DeleteDocument").isEnabled=!1},myapp.AddEditDocumentVersionApproval.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditDocumentVersionApprovals"]?!1:!0},myapp.AddEditDocumentVersionHolder.created=function(n){var t,i;t=n.DocumentVersionHolder.DocumentVersion.Document.DocumentTitle,i=n.DocumentVersionHolder.DocumentVersion.MajorVersionNumber+"."+n.DocumentVersionHolder.DocumentVersion.MinorVersionNumber,n.details.displayName="Holder of: "+t+" v("+i+")",myapp.permissions["LightSwitchApplication:CanEditDocumentVersionHolders"]?(n.findContentItem("DetailsTab").isReadOnly=!1,n.findContentItem("DocumentReviewsTab").isReadOnly=!1):(n.findContentItem("DetailsTab").isReadOnly=!0,n.findContentItem("DocumentReviewsTab").isReadOnly=!0)},myapp.AddEditDocumentVersionReview.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditDocumentVersionReviews"]?!1:!0},myapp.AddEditEmployee.created=function(n){var t,i;n.Employee.LastName!==undefined?(t=n.Employee.LastName,i=n.Employee.FirstName,n.details.displayName="Edit Employee: "+i+" "+t):n.details.displayName="Add new Employee",n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditEmployees"]?!1:!0},myapp.AddStoredDocument.created=function(n){myapp.AddStoredDocument.DocumentVersion_StoredDocument_render=function(t,i){createDocumentUploader(t,i),i.dataBind("value.DocumentVersion.StoredDocument",function(){var r=11;n.DocumentVersion.DocumentName=t.innerText.substring(t.innerText.indexOf("File Name: ")+r)})}},myapp.BrowseChangeRequestStatuses.created=function(n){n.findContentItem("AddChangeRequestStatus").isEnabled=myapp.permissions["LightSwitchApplication:CanEditChangeRequestStatuses"]?!0:!1},myapp.BrowseDocuments.created=function(n){var t;t=n.DocumentType,n.details.displayName="Browse "+t,n.findContentItem("AddDocument").isEnabled=myapp.permissions["LightSwitchApplication:CanEditDocuments"]?!0:!1},myapp.BrowseDocumentTypes.created=function(n){n.findContentItem("AddDocumentType").isEnabled=myapp.permissions["LightSwitchApplication:CanEditDocumentTypes"]?!0:!1},myapp.BrowseEmployees.created=function(n){n.findContentItem("AddEmployee").isEnabled=myapp.permissions["LightSwitchApplication:CanEditEmployees"]?!0:!1},myapp.Home.AllDocuments_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/Documents.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Home.Settings_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/Settings.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Home.HeldDocuments_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MyDocuments.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Home.OwnedDocuments_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/OwnedDocuments.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Home.AuthoredDocuments_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/AuthoredDocuments.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Home.MyReviews_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/Review.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Home.MyApprovals_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/Approvals.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Home.created=function(){$.getJSON("../UserPermissions/UserPermissions/",function(n){myapp.permissions=n})},myapp.Home.DocumnetTypes_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/Documents.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Home.ChangeRequestStatuses_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/RequestStatuses.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Home.Employees_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/Employees.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.MobileHome.AllDocuments_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileDocuments.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileHome.OwnedDocuments_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileOwnedDocuments.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileHome.AuthoredDocuments_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileAuthoredDocuments.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileHome.HeldDocuments_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileMyDocuments.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileHome.MyReviews_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileReview.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileHome.Settings_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileSettings.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileHome.MyApprovals_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileApprovals.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileHome.created=function(){$.getJSON("../UserPermissions/UserPermissions/",function(n){myapp.permissions=n})},myapp.MobileSettings.DocumentTypes_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileDocuments.png)","background-repeat":"no-repeat","background-position":"center",width:"150px",height:"150px"})},myapp.MobileSettings.ChangeStatus_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileRequestStatuses.png)","background-repeat":"no-repeat","background-position":"center",width:"150px",height:"150px"})},myapp.MobileSettings.Employees_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileEmployees.png)","background-repeat":"no-repeat","background-position":"center",width:"150px",height:"150px"})};