declare var $: any;

export function initNav(): void {
  /* Utilizzare il metodo per ogni sidebar
  * inserendo il nome del bottone che la attiva.
  * Il bottone deve avere la classe definita in questo modo:
  * "custom-<nomeBottone>-toggler"
  */
  openSidebar('navbar');
}

// metodo che replica il funzionamento del menu laterale di bootstrap-italia
function openSidebar(type: string): void {
  // open / close navbar actions
  const openbutton = $(`.custom-${type}-toggler`);
  const closebutton = $(`.${type} .close-div`);
  const overlay = $(`.${type} .overlay`);
  const backbutton = $('.it-back-button');
  const navlink = $(`.${type}-collapsable a`);
  let closemenubutton;

  // -open button action
  $(openbutton).on('click', function(event) {
    /* Act on the event */
    const target = $(event.currentTarget).attr('data-target');
    const fadelayer = $(target).find('.overlay');
    $(event.currentTarget).attr('aria-expanded', 'true');
    $(backbutton).fadeIn();
    $(target).show();
    $(fadelayer).fadeIn();
    $(target).addClass('expanded');
  });

  $(overlay).on('click', function(event) {
    const target = $(event.currentTarget).closest(`.${type}-collapsable`);
    const buttonrel = $(event.currentTarget)
      .closest(`.${type}`)
      .find(`.custom-${type}-toggler`);
    const fadelayer = $(target).find('.overlay');
    $(buttonrel).attr('aria-expanded', 'false');

    $(target).removeClass('expanded');
    $(fadelayer).fadeOut();
    setTimeout(function() {
      $(target).hide();
    }, 300);
  });

  // -close button action
  $(closebutton).on('click', function(event) {
    const target = $(event.currentTarget).closest(`.${type}-collapsable`);
    const buttonrel = $(event.currentTarget)
      .closest(`.${type}`).find(`.custom-${type}-toggler`);
    const fadelayer = $(target).find('.overlay');

    $(buttonrel).attr('aria-expanded', 'false');

    $(target).removeClass('expanded');
    $(fadelayer).fadeOut();
    setTimeout(function() {
      $(target).hide();
    }, 300);
  });

  // -- (a fine elenco viene chiuso il menù ed il focus passa all'elemento successivo)
  $(navlink).on('blur', function(event) {
    // determino il pulsante di chiusura
    closemenubutton = $(event.currentTarget)
      .closest(`.${type}-collapsable`).find('.close-div .btn');
    closeMenu(event);
  });

  // -- (a inizio elenco tabbando indietro, dopo il close chiudo il menu)
  $(closebutton).on('blur', function(event) {
    closemenubutton = $(event.currentTarget);
    closeMenu(event);
  });

  function closeMenu(event): void {
    if ($(event.currentTarget).closest(`.${type}-collapsable`).hasClass('expanded')) {
      // se il navigatore è aperto
      setTimeout(function() {
        const active = document.activeElement; // determino quale elemento ha il focus
        const isMenu = $(active).closest(`.${type}-collapsable`).length; // controllo che l'elemento si trovi all'interno del navigatore

        if (isMenu === 0) {
          // se l'elemento è fuori dal navigatore
          $(closemenubutton).trigger('click'); // simulo il click sul pulsante di chiusura del pannello
        }
      }, 50);
    }
  }
}

