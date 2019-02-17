﻿/*
 * MoltresBot config.js
 */
module.exports = {
  moltres: "DISCORD_BOT_LOGIN_TOKEN",
  moltresdb: "MYSQL_MOLTRESDB_USER_PASSWORD",

  // All Discord IDs are ~18 digit integers given as strings, e.g.,
  // '663943454550151362'.  All the IDs below are randomly generated.

  // Discord ID of your host server.
  guild_id: '363943454550151362',

  // Array of Discord IDs of users considered bot admins.
  admin_ids: new Set([
    '203901392075299070',
  ]),

  // Function which returns whether raid call times should be revealed in
  // response to `msg', with `guild' corresponding to guild_id.  Can be null
  // (or unset) to skip the check.
  call_check: function(msg, guild) {
    // e.g., Don't reveal call times in DMs.
    return msg.channel.type !== 'dm';
  },

  // Map from Discord IDs of text channels Moltres watches to arrays of region
  // or metaregion names whose raid activities should be posted to the channel.
  channels: {
    // Raid reports and calls for Foobar Square and Baz University are posted
    // in this channel.
    '360364029619318505': ['Foobar Square', 'Baz University'],
    // Another way of expressing the same thing as the above (because of the
    // Downtown metaregion definition below.
    '360364029619318505': ['Downtown'],

    // Moltres watches this channel but doesn't post to it.
    '406619804973474187': [],
  },
  // Discord ID of the designated log channel, e.g., #moltres_log.
  log_id: '302810502352155064',

  // EX raid room configuration.
  ex: {
    // Channels to listen for EX-related requests in.
    channels: new Set([
      '249799275513811320',
    ]),

    // Discord ID of the EX raid room channel category.  This is an optional
    // parameter; if it isn't provided, the EX channels will not belong to any
    // category.  Note, however, that in this case, channels with names that
    // resemble EX raid room names will confuse Moltres.
    category: '335603638413579047',

    // Array of permission overwrite objects.  By default, the only permission
    // overwrite for the channel will be that @everyone cannot read messages.
    // See the discord.js documentation for more details about the structure of
    // this array.
    //
    // Moltres uses the existence of permission overwrites for a specific user
    // as an indicator of whether the user is present in the room, so be
    // careful of adding user-specific overwrites here.
    //
    // https://discord.js.org/#/docs/main/stable/typedef/ChannelCreationOverwrites
    permissions: [{
      id: '208609644688636289',
      deny: ['USE_EXTERNAL_EMOJIS'],
      allow: ['SEND_MESSAGES'],
    }],

    // Whether to ban $exit on the day of the EX raid to encourage good
    // communication.
    exit_strict: false,
  },

  // Map from string region names to region role string IDs.
  regions: {
    'Foobar Square': '217411278013305715',
    'Baz University': '375010432273546672',
  },
  // Map from string meta-region names to array of constituent regions.
  metaregions: {
    'Downtown': ['Foobar Square', 'Baz University'],
  },
  // Name of the geographic area your server encompasses.
  area: 'Metropolis',

  // Map from Moltres's emoji names to custom emoji names or supported Discord
  // emoji available on any of its servers.
  emoji: {
    approved: '✅',
    banned: '⛔',
    dealwithit: '🕶',
    team: 'valor',
    valor: 'valor',
    mystic: 'mystic',
    instinct: 'instinct',
    raidegg: '🥚',
    boss: '🐳',
  },

  // Map from boss nicknames to full names.
  boss_aliases: {
    ttar: 'tyranitar',
  },
  // Zero-indexed array of default bosses for each tier.
  boss_defaults: [
    null, // 0 (unused)
    null, // 1
    null, // 2
    null, // 3
    null, // 4
    'giratina', // 5
  ],
};
