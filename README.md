# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation
# chat space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
|member_id|integer|null: false, foreign_key: true|
### Association
- has_many :chats
- belongs_to :member

## membersテーブル
|Column|Type|Options|
|------|----|-------|
|name|text|null: false|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- has_many :groups, through:   :members_groups

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|text|nulll: false|

### Association
- has_many :members, through:   :members_groups
- has_many :chats


## members_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|member_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :member
- belongs_to :group

## chatsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|image|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
_ belongs_to :group






* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
