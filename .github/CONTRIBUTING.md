# Contribution 101

We are delighted to see that you want to send your contribution(s) to be merged
into this repository.

However, as we are a small team, and in order to save time, we would like you to
follow these "regulations".

## Licensing

Please observe the ONLY `LICENSE.md` file given to you at the repository root.

## Code of Conduct

I believe you have read [the Code of Conduct](https://github.com/cyberowl-town/.github/blob/main/CODE_OF_CONDUCT.md)
at its entirety.

> TL;DR for that CoC: keep common sense.

## Code contributions

- We do not require a PR to be linked with an issue; however, having one is nice.

- Make sure you use the search box to check for existing PR and/or issues.

- Make sure your code works on [all Node.js LTS versions](https://nodejs.org/en/about/previous-releases#looking-for-the-latest-release-of-a-version-branch).

- When in doubt, Docker could be your friend.

### Code Contribution Authority

We use the same terms as [The Linux Foundation's "Developer Certificate of Origin"](https://developercertificate.org/)

## Git contributions

- Each commit should do a single thing.
  - Or, you can do multiple things, just keep it small.

- We **DO NOT** use Conventional Commit for commit messages.
  - Write like you write as a human, expecting a human
  - We (mostly) use simple present tense for action.
  - We (mostly) start with a lower-case word and end with a period.
  - Joking is allowed _where appropriate_.

- The headline should be short (~70-80 characters).

### Good

```txt
apply automatic S3 environment loader.

required by AWS upstream.

- so that Next.js will not complain inside Server Actions.

- so that AWS S3 SDK would not complain about broken IAM.
```

### Bad - for the love of god, please don't do this

```txt
fix(cms): applied auth check in /api/auth, /api/auth/discord, modified testimonial part of the landing page, use purple primary for TailwindCSS, and changed the constant of Math.PI to 3.41
```
