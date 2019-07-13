Nova.booting((Vue, router) => {
    router.beforeEach((to, from, next) => {
        if(to.name === 'detail') {
            next({
                path: '/resources/'+to.params.resourceName+'/'+to.params.resourceId+'/edit'
            });
        } else {
            next();
        }
    })
})