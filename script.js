//Wait until the page loads
$(function() {
    //Find the elememt with the id js-shopping-list-form and bind the submit action to this function
    $('#js-shopping-list-form').submit(function(event){
      //Cancel the submit action
      event.preventDefault();
      console.log('submit trigger');
      //Save reference to this value. Find the element with the id shopping-list-entry and get the current value
      const inputItem = $('#shopping-list-entry').val();
      console.log(inputItem);
  
      const newItem = 
        `<li>
      <span class="shopping-item">${inputItem}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
        <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
        <span class="button-label">delete</span>
        </button>
      </div>
      </li>`;
      console.log(newItem);
      $('.shopping-list').append(newItem);
    });
  
    $(document).on('click', '.shopping-item-delete', function(event){
      event.preventDefault();
      console.log('delete trigger');
      const deleteItem = $(this).closest('li').remove();
    });
  
    $(document).on('click', '.shopping-item-toggle', function(event){
      event.preventDefault();
      console.log('toggle trigger');
      const checkItem = $(this).parent().parent().find('.shopping-item').toggleClass('shopping-item__checked'); 
    });
  });