
// Form-Validation.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - ThemeOn.net -


$(document).ready(function() {


	// FORM VALIDATION
	// =================================================================
	// Require Bootstrap Validator
	// http://bootstrapvalidator.com/
	// =================================================================


	// FORM VALIDATION FEEDBACK ICONS
	// =================================================================
	var faIcon = {
		valid: 'fa fa-check-circle fa-lg text-success',
		invalid: 'fa fa-times-circle fa-lg',
		validating: 'fa fa-refresh'
	}



	// FORM VALIDATION ON TABS
	// =================================================================
	$('#bv-bsc').bootstrapValidator({
		excluded: [':disabled'],
		feedbackIcons: faIcon,
		fields: {
			fullName: {
				container: 'popover',
				validators: {
					notEmpty: {
						message: 'Поле имя обязательное'
					}
				}
			},
			phoneNumber: {
				container: 'popover',					
				validators: {
					notEmpty: {
						message: 'Поле телефон обязательное'
					},
					digits: {
						message: 'Вы можете вводить только цифры'
					}
				}
			}
		}
	}).on('status.field.bv', function(e, data) {
		var $form     = $(e.target),
		validator = data.bv,
		$tabPane  = data.element.parents('.tab-pane'),
		tabId     = $tabPane.attr('id');

		if (tabId) {
		var $icon = $('a[href="#' + tabId + '"][data-toggle="tab"]').parent().find('i');

		// Add custom class to tab containing the field
		if (data.status == validator.STATUS_INVALID) {
			$icon.removeClass(faIcon.valid).addClass(faIcon.invalid);
		} else if (data.status == validator.STATUS_VALID) {
			var isValidTab = validator.isValidContainer($tabPane);
			$icon.removeClass(faIcon.valid).addClass(isValidTab ? faIcon.valid : faIcon.invalid);
		}
		}
	});


	// FORM VALIDATION ON ACCORDION
	// =================================================================
	$('#bv-bsc-2').bootstrapValidator({
		excluded: ':disabled',
		feedbackIcons: faIcon,
		fields: {
			email: {
				container: 'popover',
				validators: {
					notEmpty: {
						message: 'Поле Е-mail обязательное'
					},
					emailAddress: {
						message: 'Введите действующий Е-mail'
					}
				}
			},
			firstName: {
				container: 'popover',
				validators: {
					notEmpty: {
						message: 'Поле имя обязательное'
					}
				}
			},
			phoneNumber: {
				container: 'popover',
				validators: {
					notEmpty: {
						message: 'Поле телефон обязательное'
					},
					digits: {
						message: 'Вы можете вводить только цифры'
					}
				}
			}
		}
	}).on('status.field.bv', function(e, data) {
		var $form = $(e.target),
		validator = data.bv,
		$collapsePane = data.element.parents('.collapse'),
		colId = $collapsePane.attr('id');

		if (colId) {
		var $anchor = $('a[href="#' + colId + '"][data-toggle="collapse"]');
		var $icon = $anchor.find('i');

		// Add custom class to panel containing the field
		if (data.status == validator.STATUS_INVALID) {
			$anchor.addClass('bv-col-error');
			$icon.removeClass(faIcon.valid).addClass(faIcon.invalid);
		} else if (data.status == validator.STATUS_VALID) {
			var isValidCol = validator.isValidContainer($collapsePane);
			if (isValidCol) {
				$anchor.removeClass('bv-col-error');
			}else{
				$anchor.addClass('bv-col-error');
			}
			$icon.removeClass(faIcon.valid + " " + faIcon.invalid).addClass(isValidCol ? faIcon.valid : faIcon.invalid);
		}
		}
	});



	// FORM VALIDATION ON TABS
	// =================================================================
	$('#bv-bsc-3').bootstrapValidator({
		excluded: [':disabled'],
		feedbackIcons: faIcon,
		fields: {
			email: {
				container: 'popover',
				validators: {
					notEmpty: {
						message: 'Поле Е-mail обязательное'
					},
					emailAddress: {
						message: 'Введите действующий Е-mail'
					}
				}
			}
		}
	}).on('status.field.bv', function(e, data) {
		var $form     = $(e.target),
		validator = data.bv,
		$tabPane  = data.element.parents('.tab-pane'),
		tabId     = $tabPane.attr('id');

		if (tabId) {
		var $icon = $('a[href="#' + tabId + '"][data-toggle="tab"]').parent().find('i');

		// Add custom class to tab containing the field
		if (data.status == validator.STATUS_INVALID) {
			$icon.removeClass(faIcon.valid).addClass(faIcon.invalid);
		} else if (data.status == validator.STATUS_VALID) {
			var isValidTab = validator.isValidContainer($tabPane);
			$icon.removeClass(faIcon.valid).addClass(isValidTab ? faIcon.valid : faIcon.invalid);
		}
		}
	});


	// FORM VALIDATION ON ACCORDION
	// =================================================================
	$('#bv-bsc-4').bootstrapValidator({
		excluded: ':disabled',
		feedbackIcons: faIcon,
		fields: {
			email: {
				container: 'popover',
				validators: {
					notEmpty: {
						message: 'Поле Е-mail обязательное'
					},
					emailAddress: {
						message: 'Введите действующий Е-mail'
					}
				}
			},
			firstName: {
				container: 'popover',
				validators: {
					notEmpty: {
						message: 'Поле имя обязательное'
					}
				}
			},
			phoneNumber: {
				container: 'popover',
				validators: {
					notEmpty: {
						message: 'Поле телефон обязательное'
					},
					digits: {
						message: 'Вы можете вводить только цифры'
					}
				}
			}
		}
	}).on('status.field.bv', function(e, data) {
		var $form = $(e.target),
		validator = data.bv,
		$collapsePane = data.element.parents('.collapse'),
		colId = $collapsePane.attr('id');

		if (colId) {
		var $anchor = $('a[href="#' + colId + '"][data-toggle="collapse"]');
		var $icon = $anchor.find('i');

		// Add custom class to panel containing the field
		if (data.status == validator.STATUS_INVALID) {
			$anchor.addClass('bv-col-error');
			$icon.removeClass(faIcon.valid).addClass(faIcon.invalid);
		} else if (data.status == validator.STATUS_VALID) {
			var isValidCol = validator.isValidContainer($collapsePane);
			if (isValidCol) {
				$anchor.removeClass('bv-col-error');
			}else{
				$anchor.addClass('bv-col-error');
			}
			$icon.removeClass(faIcon.valid + " " + faIcon.invalid).addClass(isValidCol ? faIcon.valid : faIcon.invalid);
		}
		}
	});




	// FORM VALIDATION ON TABS
	// =================================================================
	$('#bv-bsc-5').bootstrapValidator({
		excluded: [':disabled'],
		feedbackIcons: faIcon,
		fields: {
			phoneNumberClick: {
				container: 'popover',					
				validators: {
					notEmpty: {
						message: 'Вы можете вводить только цифры'						
					},
					regexp: {
						regexp: /[0-9-\.]/
					}
				}
			}
		}
	}).on('status.field.bv', function(e, data) {
		var $form     = $(e.target),
		validator = data.bv,
		$tabPane  = data.element.parents('.tab-pane'),
		tabId     = $tabPane.attr('id');

		if (tabId) {
		var $icon = $('a[href="#' + tabId + '"][data-toggle="tab"]').parent().find('i');

		// Add custom class to tab containing the field
		if (data.status == validator.STATUS_INVALID) {
			$icon.removeClass(faIcon.valid).addClass(faIcon.invalid);
		} else if (data.status == validator.STATUS_VALID) {
			var isValidTab = validator.isValidContainer($tabPane);
			$icon.removeClass(faIcon.valid).addClass(isValidTab ? faIcon.valid : faIcon.invalid);
		}
		}
	});


	// FORM VALIDATION ON ACCORDION
	// =================================================================
	$('#bv-bsc-8').bootstrapValidator({
		excluded: ':disabled',
		feedbackIcons: faIcon,
		fields: {
			email: {
				container: 'popover',
				validators: {
					notEmpty: {
						message: 'Поле Е-mail обязательное'
					},
					emailAddress: {
						message: 'Введите действующий Е-mail'
					}
				}
			},
			firstName: {
				container: 'popover',
				validators: {
					notEmpty: {
						message: 'Поле имя обязательное'
					}
				}
			},
			message: {
				container: 'popover',
				validators: {
					notEmpty: {
						message: 'Необходимо написать отзыв'
					}
				}
			}
		}
	}).on('status.field.bv', function(e, data) {
		var $form = $(e.target),
		validator = data.bv,
		$collapsePane = data.element.parents('.collapse'),
		colId = $collapsePane.attr('id');

		if (colId) {
		var $anchor = $('a[href="#' + colId + '"][data-toggle="collapse"]');
		var $icon = $anchor.find('i');

		// Add custom class to panel containing the field
		if (data.status == validator.STATUS_INVALID) {
			$anchor.addClass('bv-col-error');
			$icon.removeClass(faIcon.valid).addClass(faIcon.invalid);
		} else if (data.status == validator.STATUS_VALID) {
			var isValidCol = validator.isValidContainer($collapsePane);
			if (isValidCol) {
				$anchor.removeClass('bv-col-error');
			}else{
				$anchor.addClass('bv-col-error');
			}
			$icon.removeClass(faIcon.valid + " " + faIcon.invalid).addClass(isValidCol ? faIcon.valid : faIcon.invalid);
		}
		}
	});






	// MASKED INPUT
	// =================================================================
	// Require Masked Input
	// http://digitalbush.com/projects/masked-input-plugin/
	// =================================================================


	// Initialize Masked Inputs
	// a - Represents an alpha character (A-Z,a-z)
	// 9 - Represents a numeric character (0-9)
	// * - Represents an alphanumeric character (A-Z,a-z,0-9)
	
	$('#msk-phone').mask('+99 (999) 999-99-99');
	$('#order_one_click').mask('999-99-99');
	$('#list_one_click').mask('999-99-99');
	$('#list_one_click2').mask('999-99-99');
	$('#list_one_click3').mask('999-99-99');



});
