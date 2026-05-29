<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!-- saved from url=(0051)https://login.paypay-bank.co.jp/wctx/LoginAction.do -->
<html lang="ja"><head><meta http-equiv="Content-Type" content="text/html; charset=Shift_JIS">
<link rel="canonical" href="https://login.paypay-bank.co.jp/wctx/LoginAction.do">
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<meta http-equiv="Content-Script-Type" content="text/javascript">
<meta name="format-detection" content="telephone=no">

<title>ログイン - PayPay銀行</title>
<meta name="description" content="PayPay銀行取引画面へのログイン画面です。">
<link rel="stylesheet" type="text/css" href="./index_files/reset.css" media="screen, print">
<link rel="stylesheet" type="text/css" href="./index_files/component_smt.css" media="screen, print">
<link rel="stylesheet" type="text/css" href="./index_files/login_common_smt.css" media="screen, print">

<link rel="stylesheet" type="text/css" href="./index_files/component_pc.css" media="screen, print">
<link rel="stylesheet" type="text/css" href="./index_files/login_common_pc.css" media="screen, print">
<!--[if lt IE 9]><link rel="stylesheet" type="text/css" href="/commontpl/css/ie.css" media="screen, print"><![endif]-->


<script async="" src="./index_files/gtm.js.ダウンロード"></script><script type="text/javascript" src="./index_files/jquery-1.7.1.min.js.ダウンロード"></script>
<script src="./index_files/sha256.js.ダウンロード"></script>
<script src="./index_files/chmax.js.ダウンロード"></script>
<script type="text/javascript" src="./index_files/javalib.js.ダウンロード"></script>
<script type="text/javascript" src="./index_files/jstz.min.js.ダウンロード"></script>
<script type="text/javascript" src="./index_files/check.js.ダウンロード"></script>
<script type="text/javascript" src="./index_files/nb_error.js.ダウンロード"></script>
<script type="text/javascript" src="./index_files/cookie.js.ダウンロード"></script>

<script type="text/javascript" src="./index_files/chmin.js.ダウンロード"></script>



































<script type="text/javascript">
<!--

function od670c8a51ba64940(checkFORM) {
 // 常にエラーとする
 var errFlg = 99; // カスタムエラー扱い
 var errObj = checkFORM.TenNo; // エラー対象要素

 if (errFlg != 0) {
 nbError(errFlg, errObj);
 return false;
 }

 // 以降の処理は実行されないようにreturnで終了
 return false;
}


function nbError(errFlg, errObj) {
 switch (errFlg) {
 case 9:
 alert("必須項目が未入力です");
 break;
 case 88:
 alert("不正な入力があります");
 break;
 case 99: // カスタムエラー(この口座は利用できません)
 alert("この口座は利用できません");
 break;
 default:
 alert("不明なエラーが発生しました");
 break;
 }
}


function toLoginId(){
	var subwin = window.open('','subwin','scrollbars=yes,resizable=yes,status=yes,location=yes');
	subwin.focus();
	document.HOST.target = 'subwin';
	document.HOST.__gid.value = "NBG12340G11";
	document.HOST.__type.value = "0003";
	document.HOST.__sid.value = "00000";
	document.HOST.__uid.value = "00000";
	document.HOST.__fid.value = "NBG12740";
	document.HOST.B_ID.value = "1";
	document.HOST.ShikiCode.value = "";
	document.HOST.rw_screenparam_button.value = "";
	document.HOST.TimeZone.value = "";
	document.HOST.TimeZoneDetect.value = "";
	document.HOST.ScreenWidth.value = "";
	document.HOST.ScreenHeight.value = "";
	document.HOST.ScreenColorDepth.value = "";
	document.HOST.NavigatorPlatform.value = "";
	document.HOST.submit();
}


function toLoginPw(){
	document.HOST.target = '_self';
	document.HOST.__gid.value = "NBG12340G11";
	document.HOST.__type.value = "0003";
	document.HOST.__uid.value = "00000";
	document.HOST.__sid.value = "00000";
	document.HOST.__fid.value = "NBG12511";
	document.HOST.B_ID.value = "1";
	document.HOST.ShikiCode.value = "8000";
	document.HOST.rw_screenparam_button.value = "";
	document.HOST.TimeZone.value = "";
	document.HOST.TimeZoneDetect.value = "";
	document.HOST.ScreenWidth.value = "";
	document.HOST.ScreenHeight.value = "";
	document.HOST.ScreenColorDepth.value = "";
	document.HOST.NavigatorPlatform.value = "";
	
	
	
	document.HOST.rw_screenparam_loginIdFlg.value = "0";
	
	
	document.HOST.submit();
}

function showUnsupportedInfo(ua){
	var targetUA = new Array(/Windows 95/, /Windows 98/, /Windows 3\.1/, /Windows NT 4\./, /Windows NT 5\./, /WindowsNT 5\.1;/, /Android 1\./, /Android 2\.0/, /Android 2\.1/, /Android 2\.2/, /Mac OS X 10\.4/, /Mac OS X 10_4/);

	if(ua){
		for(var i=0; i<targetUA.length; i++){
			if(ua.search(targetUA[i])>-1){
				return true;
			}
		}
	}
	return false;
}

function changeAsterisk(){
	var elm = document.getElementById("idPw");
	var elmType = elm.type;
	if(elmType == "password"){
		elm.type = "text";
	}else{
		elm.type = "password";
	}
}
/* 必須項目class制御 */
function setReqCls(slc){
	return $(slc).focus(function(){
		$(this).removeClass('reqEntry');
	}).blur(function(){
		if(!$(this).val()) $(this).addClass('reqEntry');
	});
}

$(function(){
	
	var ua = window.navigator.userAgent;
	document.HOST.userAgent.value = ua ? ua : '';

	setReqCls("#idTenNo,#idKozaNo,#idLoginId,#idPw");

	
	$("#hdrContainer .hdrL").wrapInner('<a href="https://www.paypay-bank.co.jp/" target="_blank">');

});
//-->
</script>




	
	
		<script src="./index_files/satelliteLib-27fe9326fc116198f78f7151ce8e9e10bd1f9cc9.js.ダウンロード"></script>
	







<script>
window.dataLayer = window.dataLayer || [];
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PWPN53G');</script>

<script type="text/javascript">
<!--
var TITLE;
if(document.title != ""){
	TITLE = document.title;
}else{
	TITLE = "NBG12340G11.jsp";
}

dataLayer.push({
'event': 'virtualPageview',
'virtualURL': '/NBG12340G11.jsp',
'pageTitle': TITLE,
'userID': null
});
-->
</script>













	<script type="text/javascript">
		
		
			function getSefasdIkk(){
				
					
						var result = {
							"c" : "942FFD195AC9A73D9C3655E296B05B85CB05356000865D4178873907C0E0DECE"
						};
					
					
				
				return result;
			};
		
		
			
			
				
				(function () {var cookie_value=null;try{cookie_value=document.cookie;}catch(e){}if(cookie_value){var re=new RegExp('(?:^| )(LSESSION_336450=.[^;]+)','i'),matches=null;var result=null;if(cookie_value.length>0){matches=cookie_value.match(re);if(matches&&matches.length==2){result=matches[1];}}}var url="https://tjmbk.paypay-bank.co.jp/336450/jnbsld.js";var s=document.createElement('script');s.type="text/javascript";s.async=true;var extra=["dt=login&r="+Math.random()];if(result){extra.push(result);}s.src=[url,extra.join("&")].join("?");document.getElementsByTagName('head')[0].appendChild(s);}());
			
		
	</script><script type="text/javascript" async="" src="./index_files/jnbsld.js.ダウンロード"></script>

	
		
			
			
				<script type="text/javascript" src="./index_files/mk14.js.ダウンロード"></script><script type="text/javascript" async="" src="./index_files/jnbccd.js.ダウンロード"></script>
			
		
	



<script type="text/javascript" src="./index_files/7G2.js.ダウンロード" id="c1zitj"></script><script type="text/javascript" src="./index_files/1GW.js.ダウンロード" id="xw2fw8"></script><script type="text/javascript" src="./index_files/jnbpr.js.ダウンロード" id="1t9vq"></script><script type="text/javascript" src="./index_files/jnbcdd.js.ダウンロード" id="t3mya"></script><script type="text/javascript" src="./index_files/jnbcrd.js.ダウンロード" id="swq4c8"></script><script type="text/javascript" src="./index_files/jnbcud.js.ダウンロード" id="qblpje"></script><script type="text/javascript" async="" src="./index_files/Mk93"></script><script type="text/javascript" async="" src="./index_files/hda"></script><script type="text/javascript" async="" src="./index_files/Mk93(1)"></script><script type="text/javascript" async="" src="./index_files/Mk93(2)"></script><script type="text/javascript" async="" src="./index_files/Mk93(3)"></script><script type="text/javascript" async="" src="./index_files/Mk93(4)"></script></head>
<body id="login">



<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWPN53G"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

<!--body wrapper-->
<div id="bodyWrapper">



<a name="top"></a>


<!--skip-->
<div id="skip"><a href="https://login.paypay-bank.co.jp/wctx/LoginAction.do#container">本文へスキップ</a></div>
<!--/skip-->




<div id="hdrContainer" class="cfx ver2">
	<div class="hdrLR">
		<div class="hdrL"><a href="https://www.paypay-bank.co.jp/" target="_blank">
		
			<img src="./index_files/main_logo.png" width="191" height="36" alt="PayPay銀行">
		
		</a></div>
		<div class="hdrR">
			<a href="https://login.paypay-bank.co.jp/cr/faq/head-customer-top.html" target="_blank" class="faq"><img src="./index_files/header_faq.png" width="20" height="20" alt="よくあるご質問">よくあるご質問</a>
		
		</div>
	</div>
</div>

<!--noscript-->
<noscript><p id="noJs">当サイトをご利用になるためには、JavaScriptを有効にする必要があります。</p></noscript>
<!--/noscript-->




<div id="container" class="">
<form method="post" action="https://login.paypay-bank.co.jp/wctx/NBCW2101.do" name="HOST" onsubmit="return od670c8a51ba64940(document.HOST)" target="_self">

<input type="hidden" name="__type">
<input type="hidden" name="__gid" value="NBG12340G11" id="idGid">
<input type="hidden" name="__fid">
<input type="hidden" name="__uid">
<input type="hidden" name="__bid">
<input type="hidden" name="B_ID">
<input type="hidden" name="__sid">
<input type="hidden" name="ShikiCode">
<input type="hidden" name="LoginIdFlg">
<input type="hidden" name="rw_screenparam_loginIdFlg">
<input type="hidden" name="SikibetuId" value="">
<input type="hidden" name="ShohinKbn" value="">
<input type="hidden" name="Parameters" value="">
<input type="hidden" name="userAgent" value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36">



<input type="hidden" name="rw_screenparam_button">
<input type="hidden" name="rw_screenparam_LoginEncGid" value="CAB0E4F0854533BF5A1527B8B30B6F48C6DA7C891B4638F360E0E08D178B7F63">
<input type="hidden" name="rw_screenparam_LoginGid" value="NBG12340G11">

<input type="hidden" name="rw_screenparam_ResultMsg" value="">
<input type="hidden" name="rw_screenparam_loginEnc_ResultMsg" value="">
<input type="hidden" name="rw_screenparam___gidDisp" value="NBG12340G11">
<input type="hidden" name="WelcomePageFlg" value="1">

<input type="hidden" name="TimeZone">
<input type="hidden" name="TimeZoneDetect">
<input type="hidden" name="ScreenWidth">
<input type="hidden" name="ScreenHeight">
<input type="hidden" name="ScreenColorDepth">
<input type="hidden" name="NavigatorPlatform">















<!--title-->
<div id="title">






<div class="titleL"><h1>ログイン</h1></div>


</div>
<!--/title-->

<!--incontainer-->
<div id="inContainer" class="">

<!--main-->
<div id="mainArea">

<!--contents-->
<div class="contents">





<div id="loginInfomation" class="blk">

</div>
<!--error-->








<!--/error-->


<div class="blk">	
<div class="blkCont txtR">



<a href="https://login.paypay-bank.co.jp/wctx/LoginAction.do?loginIdFlg=1">ログインID設定済の方</a>


</div>
</div>
	



	
<!--blk-->
<div class="blk">
	



	
<div class="blkCont layout-form layout-form-login layout-form-login-noborder">
	
<div class="login-number-wrap">
	<p class="wrap-input input-num3">
		<label for="idTenNo" class="input-title">店番号</label>
		<input type="tel" id="idTenNo" name="TenNo" size="4" maxlength="3" value="" class="reqEntry">
		<span class="input-message">3桁</span>
	</p>
	<p class="wrap-input input-num7">
		<label for="idKozaNo" class="input-title">口座番号</label>
		<input type="tel" id="idKozaNo" name="KozaNo" size="9" maxlength="7" value="" class="reqEntry">
		<span class="input-message">7桁</span>
	</p>
</div>

<p class="wrap-input wrap-input-pw">
	<label for="idPw" class="input-title">ログインパスワード</label>
	<input type="password" id="idPw" name="Pw" size="20" maxlength="32" value="" class="reqEntry"><span id="vBtn" class="visualization" onclick="changeAsterisk()"></span>
	<span class="input-message">半角英数記号32文字以内</span>
	<span class="pwLink mt-16"><a href="javascript:toLoginPw()" class="notWinOpen">わからない場合（再設定）</a></span>
</p>

<p class="loginBtn">



<input type="submit" name="login" value="ログイン" class="btn btn01 btnL">


</p>

</div>
<!--/blkCont-->
</div>
<!--/blk-->









</div>	
<!--/contents-->




<!--loginNote-->
<div class="loginNote contents">






<!--お困りの場合-->
<div class="blk">
<div class="blkTitle"><h2 class="h201">お困りの場合</h2></div>






<div class="blkCont">
<p>ログインパスワードを入力してもログインできない<br><a href="https://www.paypay-bank.co.jp/cn_login.html" target="_blank" class="winOpen">ログインできません</a></p>
<p>個人のお客さま<br><a href="https://www.paypay-bank.co.jp/support/customer.html#others" target="_blank" class="winOpen">チャットでお問い合わせ</a></p>




<p>法人・個人事業主のお客さま<br><a href="https://login.paypay-bank.co.jp/wctx/InquiryFormG11.do" class="notWinOpen">お問い合わせフォーム</a></p>
	
	
	<!--ID設定有無共通-->
	<p>初期設定がお済みでないお客さま<br><a href="https://login.paypay-bank.co.jp/wctx/NBG12390G11.do" class="notWinOpen">初期設定</a></p>
	<!--/ID設定有無共通-->
	
	




</div>








</div>
<!--/お困りの場合-->
	
</div>
<!--/loginNote-->







<!--loginNote-->
<div class="loginNote contents">

<!--ID設定有無共通-->
<div class="blk">
<div class="blkCont bdrT0">








<p>BA-PLUSをご利用中のお客さまは、<a href="https://login.paypay-bank.co.jp/balogin_L.html">BA-PLUS専用ログイン</a>ページからログインしてください。</p>


</div>

</div>
<!--/ID設定有無共通-->

</div>
<!--/loginNote-->









</div>
<!--/main-->

</div>
<!--/incontainer-->

</form>
</div>
<!--/container-->

<!--footer-->


<div id="ftrContainer" class="cfx ver2">
	<p class="chat">
		
		
	</p>
	<div class="ftrLR">
		<div class="ftrL">
			<a href="https://www.paypay-bank.co.jp/regulation/index.html" target="_blank">取引規定集</a>
			<a href="https://www.paypay-bank.co.jp/policy/privacy/index.html" target="_blank">プライバシーポリシー</a>
		</div>
		
		<div class="ftrC">
			<p class="first"><img src="./index_files/footer_logo.png" height="26" alt="PayPay銀行"></p>
			
			<p class="last">PayPay銀行株式会社<br>登録金融機関　関東財務局長（登金）第624号 日本証券業協会 一般社団法人 金融先物取引業協会加入</p>
		</div>
		<div class="ftrR">
			<span>&#169;PayPay Bank</span>
		</div>
	</div>
</div>


<script type="text/javascript">
<!--
var jspName = "NBG12340G11.jsp";
_satellite.pageBottom();
//-->
</script>


<!--/footer-->


<img src="./index_files/login_img001.gif" width="1" height="1" alt="">

</div>
<!--/body wrapper-->
<!--2020/10/30 Fraud Watch-->
<script type="text/javascript" src="./index_files/image.js.ダウンロード"></script><img src="./index_files/86975.gif" alt="">







<iframe title="qtmetg" id="idi270" style="visibility: hidden; width: 0px; height: 0px; border-width: medium; border-style: none; border-color: currentcolor; border-image: initial; display: none;" src="./index_files/saved_resource.html"></iframe><iframe title="gyedmy" id="igdi238" style="visibility: hidden; width: 0px; height: 0px; border-width: medium; border-style: none; border-color: currentcolor; border-image: initial; display: none;" src="./index_files/saved_resource(1).html"></iframe><iframe id="iframe993" src="./index_files/saved_resource(2).html" title="y_yspp" style="width: 0px; height: 0px; border-width: medium; border-style: none; border-color: currentcolor; border-image: initial; display: none;"></iframe></body></html>
