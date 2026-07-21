---
title: "Wordle-Ish: an open source wordle clone"
description: "How a first-time Tier 3 Chingu voyage turned into a lesson on AI-assisted development, uneven team bandwidth, and quietly becoming the person everyone leaned on."
pubDate: 2026-07-20
tags: ["chingu", "team-leadership", "ai-assisted-development", "case-study"]
draft: false
---

I ended up reviewing almost every pull request on this project, merging most sprints myself, and getting pulled into the harder tickets whenever I missed a planning meeting. I didn't set out for any of that to happen. Here's how it did, and what I think it actually says about me.

## The setup

Chingu Voyage 61, Tier 3, a six-week volunteer sprint to build a small web app with a team of strangers. This was my second voyage — my first was Tier 1, where the reviewers told me I was probably a little overqualified for it. So for voyage two I got placed on a Tier 3 team, my first one, building a Wordle-style word game called Wordle-ish: React/Vite frontend, Supabase for auth and game data, GitHub Actions for CI.

Our team also volunteered to be something like an internal pilot group — leaning on AI-assisted development throughout the voyage, partly to see how far it could take a volunteer team with mixed skill levels, partly to generate real feedback Chingu could use when it writes future policy on AI use in voyages.

## Where the imbalance came from

By the end, the GitHub history makes it pretty obvious that two of us — myself and a teammate, Lindsay — shipped the large majority of the PRs. That's not because I was trying to outrun anyone. Looking back, it came down to three things stacking on top of each other for different teammates: unfamiliarity with the tech stack, unfamiliarity with AI-assisted coding, and just not having as much time to give the project in a given week. Any one of those slows someone down. A couple of people were dealing with more than one at once.

When someone was behind on an assigned task, I didn't bring it up in the group channel. I'd message them directly — asked if they were stuck, offered to help. Almost every time, the answer was some version of "swamped, but shipping tonight," and they did, and it usually looked fine and got merged without drama. That part of the process worked exactly like it should.

What I didn't fully clock until the retro was how much this had shifted the team's center of gravity toward me. Teammates started routing bigger features to me by default — six-letter Infinity Mode, the Daily Puzzle mode, the leaderboard rework. The team more or less volunteered me as primary code reviewer and the person doing weekly merges. And if I missed a planning meeting, I'd often come back to find myself assigned the most complex ticket in the sprint, on the assumption I'd figure it out.

## Sitting with the imposter syndrome part

I'll say the honest part plainly: it felt strange to be leading review and merge decisions on my *first* Tier 3 team, surrounded by people who'd been through more of these voyages than I had. Several of them, I'd guess, have more raw hand-coding experience than I do. What I had going for me was fluency with the GitHub workflow end to end and comfort using AI tools to plan and ship features quickly — and on a team piloting AI-assisted development, that specific fluency ended up mattering more than it normally would.

At the final retro, teammates said as much directly — that I'd been helpful, good at unblocking people, good at explaining how to use tools they were still learning. That's the framing I've landed on for what actually happened here: not that I outworked or crowded out the team, but that the team's own gaps and my particular strengths pointed in the same direction, and everyone adjusted around that in real time.

## What I'd flag honestly

I don't want to sand off the one part of this that's genuinely worth being self-critical about: because I moved fast with AI-assisted workflows, a couple of teammates likely got fewer hands-on reps than they would have on a slower-moving team. That's a real tradeoff of this pilot structure, not just mine to take credit for solving. If Chingu uses our team's experience to shape future guidance on AI use in voyages, that tension — velocity versus everyone getting equal reps — is probably the most useful thing we learned.

## Where that leaves me

Coming out of this, I'd rather describe the role I ended up in accurately than either undersell it or spin it: on a volunteer team with real gaps in time and experience, I became the de facto reviewer, merge owner, and go-to person for unblocking people — inside my first Tier 3 project, on a team explicitly testing how far AI-assisted development could take a group like ours. That's a leadership and mentorship story, uneven team dynamics and all, not a solo-contributor one. I think that's worth more to a hiring manager than a clean PR count ever would be.
