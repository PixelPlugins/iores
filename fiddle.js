const Gtk = imports.gi.Gtk
const app = Gtk.Application.new('com.example.test', 0)
app.connect('activate', function() {
	const win = Gtk.ApplicationWindow.new(app)
	win.set_title('Test')
	win.set_default_size(300, 300)
	const root = Gtk.Box.new(Gtk.Orientation.VERTICAL, 10)
	win.add(root)
	root.set_margin_top(10)
	root.set_margin_left(10)
	root.set_margin_right(10)
	root.add(Gtk.Label.new('As it turns out, I can run arbitrary code from here!'))
	const lbl = Gtk.Label.new('For example, click this button:')
	root.add(lbl)
	const btn = Gtk.Button.new_with_label('Button')
	root.add(btn)
	btn.connect('clicked', function() {
		lbl.set_text('Yep, it works!')
	})
	win.show_all()
})
app.run([])
