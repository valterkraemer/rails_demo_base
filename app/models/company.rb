class Company < ApplicationRecord
  
    has_many :users, dependent: :destroy
    ROLE_OPTIONS = %i(buyer supplier)
    enum role: ROLE_OPTIONS

    scope :include_users, -> { left_outer_joins(:users) }
    scope :filter_with_role, ->(role) { where(role: role) } #filter companies by role
    scope :filter_with_users_role, ->(role) { where(users: {role: role}) } #filter companies based on user role
    scope :grouped_by_roles, -> { group(:role) } #group company roles
    scope :ordered_by_users_count, ->(sort) { order("count(users.id) #{sort}")}

    #filter companies with user count based on roles of company and users respectively else return companies
    def self.filter_by_role(role = Company::ROLE_OPTIONS, sort = 'desc')
      companies = include_users
      companies = companies.filter_with_role(role) if role.to_sym.in? Company::ROLE_OPTIONS
      companies = companies.filter_with_users_role(role) if role.to_sym.in? User::ROLE_OPTIONS
      companies = companies.
        select("companies.*, count(users.id) as users_count").
        group('companies.id').
        ordered_by_users_count(sort).
        order(:name).
        limit(10)
      companies
    end

    #companies count based on each role
    def self.count_companies_by_roles
      companies_with_roles_count = grouped_by_roles.count
      companies_count_by_roles  = roles.map { |k, v| [k , companies_with_roles_count[k] || 0] }
      companies_count_by_roles.to_h
    end

end


