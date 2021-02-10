new Vue({
	el: '#app',
	data: {
		tasks: [],
		cont: 0,
	},
	methods: {
		createTask: function () {
			this.tasks.push({ name: document.getElementById('task').value, id: this.cont++ });
		},
		removeTask: function (id) {
			this.tasks.splice(id, 1);
		},
		completeTask: function (id) {
			debugger;
			this.tasks.splice(id, 1, { name: this.tasks[id].name.strike(), id: id });
		},
	},
});
