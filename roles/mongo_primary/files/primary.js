cfg = rs.conf()
cfg.members[0].priority = 0.5
cfg.members[1].priority = 1
rs.reconfig(cfg)
