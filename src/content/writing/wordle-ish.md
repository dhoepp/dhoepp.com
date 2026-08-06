---
title: "Wordle-Ish: an open source wordle clone"
description: "A first-time Tier 3 Chingu voyage on AI-assisted development, uneven team bandwidth, and ending up as the de facto code reviewer and merge owner."
pubDate: 2026-07-20
tags: ["chingu", "team-leadership", "ai-assisted-development", "case-study"]
draft: true
---

I ended up reviewing almost every pull request on this project, merging most sprints myself, and getting pulled into the harder tickets whenever I missed a planning meeting. Here's how it happened.

## The setup

Chingu Voyage 61, Tier 3, a six-week volunteer sprint to build a small web app with a team of strangers. This was my second voyage. My first was Tier 1. For voyage two I was placed on a Tier 3 team, building a Wordle-style word game called Wordle-ish: React/Vite frontend, Supabase for auth and game data, GitHub Actions for CI.

Our team also volunteered to be something like an internal pilot group: leaning on AI-assisted development throughout the voyage, partly to see how far it could take a volunteer team with mixed skill levels, partly to generate real feedback Chingu could use when it writes future policy on AI use in voyages.

## Where the imbalance came from

By the end, the GitHub history shows two of us (myself and a teammate) merged the large majority of the PRs. Contributing factors across the team included unfamiliarity with the tech stack, unfamiliarity with AI-assisted coding, and available time in a given week. Some teammates were dealing with more than one of those at once.

When someone was behind on an assigned task, I'd message them directly rather than raise it in the group channel: asked if they were stuck, offered to help. Almost every time, the answer was some version of "busy with external obligations, but shipping tonight," and they did, and it got merged.

What I didn't fully clock until the retro was how much this had shifted the team's center of gravity toward me. Teammates started routing bigger features to me by default: six-letter Infinity Mode, the Daily Puzzle mode, the leaderboard rework. The team more or less volunteered me as primary code reviewer and the person doing weekly merges. And if I missed a planning meeting, I'd often come back to find myself assigned the most complex ticket in the sprint, on the assumption I'd figure it out.

## Sitting with the imposter syndrome part

It felt strange to be leading review and merge decisions on my first Tier 3 team, surrounded by people who'd been through more of these voyages than I had. Several of them, I'd guess, have more raw hand-coding experience than I do. What I had going for me was fluency with the GitHub workflow end to end and comfort using AI tools to plan and ship features quickly, and on a team piloting AI-assisted development, I would probably say that specific fluency ended up mattering more than it normally would.

At the final retro, teammates said I'd been helpful and good at unblocking people.

## What I'd flag honestly

Because I moved fast with AI-assisted workflows, a couple of teammates likely got fewer hands-on reps than they would have on a slower-moving team. That's a real tradeoff of this pilot structure, not just mine to take credit for solving. If Chingu uses our team's experience to shape future guidance on AI use in voyages, that tension (velocity versus everyone getting equal reps) is probably the most useful thing we learned.

## Where that leaves me

On a volunteer team with real gaps in time and experience, I became the de facto reviewer, merge owner, and go-to person for unblocking people, inside my first Tier 3 project, on a team explicitly testing how far AI-assisted development could take a group like ours.
