var ok1=false;
var ok2=false;
var ok3=false;
var ok4=false;
$('.name').focus(function(){
	var $value=$("<p class='tips'>用户名需以字母开头且长度不能超过12个字符</p>");
	if ($('.name').val()=='')
	{
	$('.name').parent().append($value);
	}
	
});
		//验证用户名
$('.name').blur(function(){
	$('.name p').hide();
	var reg=/[a-z]|[A-Z]$/;
	var $errormsg=$("<p class='tips'>error</p>");
	var $truemsg=$("<p class='passs'>true</p>");
	if(!reg.test($('.name').val())||$('.name').val().length > 12){
		$('.name').parent().append($errormsg);
	}
	else{
		$('.name').parent().append($truemsg);
		ok1=true;
	}
});
$('.word').focus(function(){
	var $value=$("<p class='tips'>密码请以字母、数字或下划线组合</p>");
		if ($('.word').val()=='')
	{
	$('.word').parent().append($value);
	}
});
		//验证密码
$('.word').blur(function(){
	$('p').hide();
	var reg=/^[a-zA-Z0-9_]{1,}$/;
	var $errormsg=$("<p class='tips'>error</p>");
	var $truemsg=$("<p class='passs'>true</p>");
	if(!reg.test($(this).val())){
		$('.word').parent().append($errormsg);
	}
	else{
		$('.word').parent().append($truemsg);
		ok2=true;
	}
});	

$('.number').focus(function(){
	var $value=$("<p class='tips'>手机号必须是11位数</p>");
		if ($('.number').val()=='')
	{
	$('.number').parent().append($value);
	}
});
		//验证手机号
$('.number').blur(function(){
	$('p').remove();
	var reg=/^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
	var $errormsg=$("<p class='tips'>error</p>");
	var $truemsg=$("<p class='passs'>true</p>");
	/*if($(this).val.length!=11){
		$('.number').parent().append($errormsg);
	}
	else */
	if(!reg.test($(this).val())){
		$('.number').parent().append($errormsg);
	}
	else{
		$('.number').parent().append($truemsg);
		ok3=true;
	}
});	
		//验证 验证码
$('.identify').focus(function(){
	var $value=$("<p class='tips'>验证码不能为空</p>");
		if ($('.identify').val()=='')
	{
	$('.input-group').parent().append($value);
	}
});
$('.identify').blur(function(){
	$('p').remove();
	var reg=/^[0-9]*$/;
	var $errormsg=$("<p class='tips'>error</p>");
	var $truemsg=$("<p class='passs'>true</p>");
	/*if(!reg.test($(this).val())==''){
		$('.input-group').parent().append($errormsg);
	}
	else */
	if((!reg.test($(this).val()))  || ($(this).val()=='')){
		$('.input-group').parent().append($errormsg);
	}
	else{
		$('.input-group').parent().append($truemsg);
		ok4=true;
	}
	
});	
		//提交表单

$('.btn-block').click(function(){
	if(ok1 && ok2 && ok3 && ok4){
		alert('恭喜您,注册成功!');
	}
	else{
		alert('注册失败，请重新审查!');
	}
})