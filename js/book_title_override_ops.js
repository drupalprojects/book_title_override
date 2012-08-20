(function ($) {
  // define function for book_title_override operation
  Drupal.outline_designer_ops.book_title_override = function() {
    $(".od_submit_button").val('Submit');
    // function call
    Drupal.outline_designer.render_popup(true);
  };
  // submit handler
  Drupal.outline_designer_ops.book_title_override_submit = function() {
    var override_status = $('#od_book_title_override_status:checked').length;
		var title = $('#od_book_title_override_title').val();
    // update database
    Drupal.outline_designer.ajax_call('book', 'book_override_title', Drupal.settings.outline_designer.activeNid, override_status, title, null);
  };
  // reset handler
  Drupal.outline_designer_ops.book_title_override_reset = function() {
    $("#od_book_title_override_status").attr("checked", false);
		$("#od_book_title_override_title").val('');
  };
})(jQuery);