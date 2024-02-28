export default {

  name: 'daybook',
  component: () => import(/* webpackChunkName: "dayBook" */ '@/modules/daybook/layouts/DayBookLayout'),
  children: [
    {
      path: '',
      name: 'daybook-no-entry',
      component: () => import(/* webpackChunkName: 'daybook-no-entry' */ '@/modules/daybook/views/NoEntrySelected')
    },
    {
      path: ':id',
      name: 'daybook-entry',
      component: () => import(/* webpackChunkName: 'daybook-entry' */ '@/modules/daybook/views/EntryView')
    }
  ]
}