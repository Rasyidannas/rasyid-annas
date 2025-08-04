export default {
  // Default: lazy discovery with /__manifest endpoint
  routeDiscovery: {
    mode: "lazy",
    manifestPath: "/__manifest",
  },

  // Custom manifest path (useful for multiple apps on same domain)
  routeDiscovery: {
    mode: "lazy",
    manifestPath: "/my-app-manifest",
  },

  // Disable lazy discovery (include all routes initially)
  routeDiscovery: { mode: "initial" },
} satisfies Config;
