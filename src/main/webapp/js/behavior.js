function simpleAjax() {

	var jsonObj = {
		'name' : '啊',
		'date' : '2017-01-02'
	};

	$.ajax({
		type : "post",
		url : "/simple_	ajax",
		dataType : "json",
		contentType : 'application/json',
		data : JSON.stringify(jsonObj),
		success : function(data) {
			alert(data);
		},
		error : function(data) {
			alert('error');
		}
	});
}

function uploadFile() {
	$('#file-upload-form').ajaxSubmit({
        type: "post",
        url: '/file_upload',
        dataType: "json",
        success: function(resp) {
        	alert("a");
        }
    });
}