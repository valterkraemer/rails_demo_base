class Company < ApplicationRecord
  
    has_many :users, dependent: :destroy
    ROLE_OPTIONS = %i(buyer supplier)
    enum role: ROLE_OPTIONS

    scope :include_users, -> { left_outer_joins(:users) }
    scope :role, ->(role) { where(role: role) } #filter companies by role
    scope :user_role, ->(role) { where(users: {role: role}) } #filter companies based on user role
    scope :count_by_roles, -> { group(:role).count } #group company roles with count

    #filter companies with user count based on roles of company and users respectively else return companies
    def self.filter_by_role(role = Company::ROLE_OPTIONS, order)
      companies = include_users
      companies = companies.role(role) if role.to_sym.in? Company::ROLE_OPTIONS
      companies = companies.user_role(role) if role.to_sym.in? User::ROLE_OPTIONS
      companies = companies.select("companies.*, count(users.id) as users_count").group('companies.id').order("count(users.id) #{order}").order(:name).limit(10)
      companies
    end

    #companies count based on each role
    def self.count_companies_by_roles
      companies_count = count_by_roles
      companies_count_by_roles  = roles.map { |k, v| [k , companies_count[k] || 0] }
      companies_count_by_roles.to_h
    end

end


