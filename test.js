var gr = new GlideRecord('incident');
gr.addEncodedQuery('priority=1');
gr.query();
while (gr.next()) {
    gs.print('This is Test GIT');
}