using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using $safeprojectname$.App_Start;

namespace $safeprojectname$
{
    public class MvcApplication : HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}