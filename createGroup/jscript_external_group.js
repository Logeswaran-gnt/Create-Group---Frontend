var mem=1
$(document).ready(function(){
    $("#addmember").click(function(){
    mem+=1
        $("#memberdiv").append("<br/><h4>Member"+mem+"</h4><div class='form-group' >"+
                    "<label for='mem"+mem+"name' class='col-sm-3 control-label'>Full Name</label>"+
                    "<div class='col-sm-9'>"+
                        "<input type='text' id='mem"+mem+"name' placeholder='Full Name' class='form-control' autofocus required='required'>"+
                    "</div>"+
                "</div>"+

                "<div class='form-group'>"+
                    "<label for='mem"+mem+"number' class='col-sm-3 control-label'> Mobile Number</label>"+
                    "<div class='col-sm-9'>"+
                    "<input type='number' id='mem"+mem+"number' placeholder='Mobile Number' class='form-control' required='required'>"+
                    "</div>"+
                "</div>"+

                "<div class='form-group'>"+
                    "<label for='mem"+mem+"email' class='col-sm-3 control-label'>Email</label>"+
                    "<div class='col-sm-9'>"+
                        "<input type='email' id='mem"+mem+"email' placeholder='Email' class='form-control' required='required'>"+
                   " </div>"+
                "</div>"+

                "<div class='form-group'>"+
                    "<label for='mem"+mem+"password' class='col-sm-3 control-label'>Password</label>"+
                    "<div class='col-sm-9'>"+
                      "  <input type='password' id='mem"+mem+"password' placeholder='Password' class='form-control' required='required'>"+
                  "  </div>"+
               " </div>"+

                "<div class='form-group'>"+
                    "<label class='control-label col-sm-3'>Gender</label>"+
                    "<div class='col-sm-6'>"+
                        "<div class='row'>"+
                           " <div class='col-sm-4'>"+
                                "<label class='radio-inline'>"+
                                   " <input type='radio' id='femaleRadio' value='Female'>Female"+
                               " </label>"+
                            "</div>"+
                          "  <div class='col-sm-4'>"+
                               " <label class='radio-inline'>"+
                                   " <input type='radio' id='maleRadio' value='Male'>Male"+
                               " </label>"+
                           " </div>"+
                           " <div class='col-sm-4'>"+
                               " <label class='radio-inline'>"+
                                    "<input type='radio' id='uncknownRadio' value='Unknown'>Unknown"+
                               " </label>"+
                           " </div>"+
                       " </div>"+
                   " </div>"+
                "</div>"+ <!-- /.form-group -->
                "</div>");
    });
});


$(document).ready(function(){
$("#register").click(function(){
var members='{"members":['
for (var i=1;i<=mem;i++)
     {
            name=document.getElementById('mem'+i+'name').value
            number=document.getElementById('mem'+i+'number').value

            if (i == mem)
                {
                members+='{"name":'+'"'+name+'","number":'+'"'+number+'"'+'}'
                }
            else
                {
                members+='{"name":'+'"'+name+'","number":'+'"'+number+'"'+'},'
                }
     }

members+=']}'
alert(members)
js=JSON.parse(members)
alert(js.members[0].name)
alert(js.members[0].number)

/*members+='{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';*/
//jsondata=JSON.parse(members)
//alert(jsondata.employees[0].firstName)
//alert(jsondata.members[0].Name)
/*var members=[[][]];
for (var i=1;i<=mem;i++){
//var members[i]['name']=document.getElementById('mem'+i+'Name").value;
//alert(mem);
members[i['name']]=document.getElementById("mem"+i+"name").value;
members[i['number']]=document.getElementById("mem"+i+"number").value;
//members[i]=i
}

alert(members[1['name']],members[1['number']])*/
});
});