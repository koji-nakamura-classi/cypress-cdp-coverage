let cri;

module.exports= {
  startCoverage: async () => {
    cri = await require('chrome-remote-interface')({port: process.env.CYPRESS_REMOTE_DEBUGGING_PORT});
    const {Debugger, Profiler} = cri;

    await Debugger.enable();
    await Profiler.enable();
    await Profiler.startPreciseCoverage({callCount: false, detailed: true});

    return null;
  },
  stopCoverage: async () => {
    const {Debugger, Profiler} = cri;

    const scripts = (await Profiler.takePreciseCoverage()).result.filter(({url}) => {
      return !url.match(/__cypress/) && url.match(/\.js$/);
    });
    console.log(JSON.stringify(scripts, null, '  '));

    return null;
  },
}
