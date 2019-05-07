var row_length=0;
$('#item-add').on('click',function()
{
    var item = $('#input-item').val();
    if(item == '' || item == ' ')
    {
        swal(
            {
                icon :'error',
                title : 'Input field is empty !',
                closeOnClickOutside: false,
            }
        );
    }
    else
    {
        $('#item-list').append(`<tr>
        <td class="mt-4">${item}</td>
        <td><button class="btn btn-danger mx-1 del-btn"><i class="fa fa-trash"></i></button>
        <button class="btn btn-success mx-1 edit-btn"><i class="fa fa-edit"></i></button></td>
        </tr>`);
        $('#input-item').val('');
        row_length++;
    }
});

$(document).on('click','.del-btn',function()
{
    swal({
        title: "Delete your TODO item ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        closeOnClickOutside: false,
      })
      .then((willDelete) => 
      {
        if (willDelete) {
            $(this).closest('tr').fadeOut();
            row_length--;
            swal({
            icon: "info",
            title : 'Deleted !',
          });
        } 
      });
    
});

$(document).on('click','.edit-btn',function()
{
    swal({
        title : 'Edit your TODO item',
        content: "input",
        icon : 'info',
        buttons: true,
        closeOnClickOutside: false,

      })
      .then((value) => {
        swal({
            icon: "success",
            title : 'Edited !',
          });
        $(this).closest('tr').replaceWith(`<tr>
        <td class="mt-4">${value}</td>
        <td><button class="btn btn-danger mx-1 del-btn"><i class="fa fa-trash"></i></button>
        <button class="btn btn-success mx-1 edit-btn"><i class="fa fa-edit"></i></button></td>
        </tr>`);
      })
});

$('#del-all').on('click',function()
{
  if(row_length == 0)
  {
    swal({
      title: "No items found in TODO list !",
      icon: "warning",
      dangerMode: true,
    });
  }
  else
  {
    swal({
      title: "Delete all TODO items ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
      closeOnClickOutside: false,
    })
    .then((willDelete) => 
    {
      if (willDelete) {
          $('#item-list tr').remove();
          swal({
          icon: "info",
          title : 'TODO list cleared !',
        });
      } 
    });
  }
});