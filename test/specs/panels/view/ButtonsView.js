const ButtonsView = require('panels/view/ButtonsView');
const Buttons = require('panels/model/Buttons');

module.exports = {
  run() {
    describe('ButtonsView', () => {
      var fixtures;
      var model;
      var view;

      beforeEach(() => {
        model = new Buttons([]);
        view = new ButtonsView({
          collection: model
        });
        document.body.innerHTML = '<div id="fixtures"></div>';
        fixtures = document.body.querySelector('#fixtures');
        fixtures.appendChild(view.render().el);
      });

      afterEach(() => {
        view.collection.reset();
      });

      it('Collection is empty', () => {
        expect(view.$el.html()).toEqual('');
      });

      it('Add new button', () => {
        sinon.stub(view, 'addToCollection');
        view.collection.add({});
        expect(view.addToCollection.calledOnce).toEqual(true);
      });

      it('Render new button', () => {
        view.collection.add({});
        expect(view.$el.html()).toExist();
      });
    });
  }
};
